import React from 'react'
import './style.css'
import 'github-markdown-css/github-markdown.css'

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

function Editor({mdText, setMDText}) {
    const [lineNums, setLineNumbers] = React.useState(1);
    const tAref = React.useRef(null);
    const lNref = React.useRef(null);

    const calculateVisibleLines = () => {
        const ta = tAref.current;
        if (!ta) return;
        const lineHeight = parseFloat(getComputedStyle(ta).lineHeight);
        const totalHeight = ta.scrollHeight;
        const visibleLines = Math.round(totalHeight / lineHeight);

        setLineNumbers([...Array(visibleLines)].map((_, i) => i + 1));
    };
    

    const syncScroll = ()=>{
        if (lNref.current && tAref.current) {
            lNref.current.scrollTop = tAref.current.scrollTop;
        }
    }


    React.useEffect(() => {
        calculateVisibleLines();
        if (tAref.current) {
            tAref.current.scrollTo(0, 0);
          }
    }, [mdText]);

    const handleMarkdownError = (error) => {
        console.error("Markdown rendering error:", error);
    }
    
    return (
        <div className='editor-cont'>
            <div style={{display:"grid", gridTemplateColumns:"30px 1fr"}}>
                <div ref={lNref} className='line-numbers'>{Array(mdText.split('\n').length).fill(0).map((_, i) => i + 1).join('\n')}</div>
                <textarea autoFocus onScroll={syncScroll} ref={tAref} placeholder='Type something here...' className='textArea' value={mdText} onChange={(e)=>{setMDText(e.target.value)}} />
            </div>
            <div className='markdown-cont markdown-body'>
                <Markdown 
                    className='markdown' 
                    children={mdText} 
                    remarkPlugins={[remarkGfm]} 
                    rehypePlugins={[rehypeSanitize]} 
                    onError={handleMarkdownError}
                />
            </div>
        </div>
    )
}

export default Editor
