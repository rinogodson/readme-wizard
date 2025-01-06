import React from "react";
import "./style.css";
import "github-markdown-css/github-markdown.css";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

function Editor({ mdText, setMDText, textAreaRef }) {
  const [lineNums, setLineNumbers] = React.useState(1);
  const lNref = React.useRef(null);

  const calculateVisibleLines = () => {
    const ta = textAreaRef.current;
    if (!ta) return;
    const lineHeight = parseFloat(getComputedStyle(ta).lineHeight);
    const totalHeight = ta.scrollHeight;
    const visibleLines = Math.round(totalHeight / lineHeight);
    setLineNumbers([...Array(visibleLines)].map((_, i) => i + 1));
  };

  const syncScroll = () => {
    if (lNref.current && textAreaRef.current) {
      lNref.current.scrollTop = textAreaRef.current.scrollTop;
    }
  };

  React.useEffect(() => {
    calculateVisibleLines();
    if (textAreaRef.current) {
      textAreaRef.current.scrollTo(0, 0);
    }
  }, [mdText]);

  const handleMarkdownError = (error) => {
    console.error("Markdown rendering error:", error);
  };

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "b") {
      e.preventDefault();
      applyMarkdownStyle("**");
    } else if ((e.ctrlKey || e.metaKey) && e.key === "i") {
      e.preventDefault();
      applyMarkdownStyle("*");
    } else if ((e.ctrlKey || e.metaKey) && e.key === "u") {
      e.preventDefault();
      applyMarkdownStyle("<u>", "</u>"); // Markdown doesn't support underline by default.
    }
  };

  const applyMarkdownStyle = (startTag, endTag = startTag) => {
    const textarea = document.getElementById('markdown-editor');
    const { selectionStart, selectionEnd, value } = textarea;

    const selectedText = value.slice(selectionStart, selectionEnd);
    const beforeText = value.slice(0, selectionStart);
    const afterText = value.slice(selectionEnd);

    const updatedText = `${beforeText}${startTag}${selectedText}${endTag}${afterText}`;
    setMDText(updatedText);

    // Preserve cursor position
    setTimeout(() => {
      textarea.selectionStart = selectionStart + startTag.length;
      textarea.selectionEnd = selectionEnd + startTag.length;
      textarea.focus();
    }, 0);
  };


  return (
    <div className="editor-cont">
      <div style={{ display: "grid", gridTemplateColumns: "30px 1fr" }}>
        <div ref={lNref} className="line-numbers">
          {Array(mdText.split("\n").length)
            .fill(0)
            .map((_, i) => i + 1)
            .join("\n")}
        </div>
        <textarea
          ref={textAreaRef}
          onKeyDown={handleKeyDown}
          autoFocus
          onScroll={syncScroll}
          placeholder="Type something here..."
          className="textArea"
          id="markdown-editor"
          value={mdText}
          onChange={(e) => {
            setMDText(e.target.value);
          }}
        />
      </div>
      <div className="markdown-cont">
        <div
          className="markdown-body"
          style={{
            backgroundColor: "#121212",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Markdown
            className="markdown"
            children={mdText}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSanitize]}
            onError={handleMarkdownError}
          />
        </div>
      </div>
    </div>
  );
}

export default Editor;
