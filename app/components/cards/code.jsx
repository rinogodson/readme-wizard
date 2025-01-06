import React from "react";
import { Input } from "@chakra-ui/react";

import { Field } from "../../../components/ui/field";

function CodeMenu({ setModalData, modalData }) {
  const [codeData, setCodeData] = React.useState({
    language: "javascript",
    body: "",
  });
  React.useEffect(() => {
    setModalData(`\n\`\`\`${codeData.language}\n${codeData.body}\n\`\`\`\n`);
  }, [codeData]);
  return (
    <div className="cardStack">
      <Field
        className="cardField"
        label="Code"
        helperText="Paste your code here."
      >
        <textarea
          value={codeData.body}
          onChange={(e) => setCodeData({ ...codeData, body: e.target.value })}
          style={{ height: "100px", fontFamily: "JetBrains Mono" }}
          className="cardInput"
          placeholder={"if(wantREADME){\n  readmeWizard.open(); \n }"}
        />
      </Field>

      <Field
        className="cardField"
        label="Language"
        helperText="Select the language."
      >
        <select
          value={codeData.language}
          onChange={(e) =>
            setCodeData({ ...codeData, language: e.target.value })
          }
          name="styles"
          className="cardInput"
        >
          {languages.items.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </Field>
    </div>
  );
}

export default CodeMenu;

const languages = {
  items: [
    { label: "JavaScript", value: "javascript" },
    { label: "Python", value: "python" },
    { label: "Java", value: "java" },
    { label: "C#", value: "csharp" },
    { label: "C++", value: "cplusplus" },
    { label: "PHP", value: "php" },
    { label: "Swift", value: "swift" },
    { label: "Kotlin", value: "kotlin" },
    { label: "Go", value: "go" },
    { label: "Ruby", value: "ruby" },
    { label: "Rust", value: "rust" },
    { label: "TypeScript", value: "typescript" },
    { label: "SQL", value: "sql" },
    { label: "R", value: "r" },
    { label: "Dart", value: "dart" },
    { label: "Scala", value: "scala" },
    { label: "Shell", value: "shell" },
    { label: "Perl", value: "perl" },
    { label: "Haskell", value: "haskell" },
    { label: "Lua", value: "lua" },
    { label: "Matlab", value: "matlab" },
    { label: "Groovy", value: "groovy" },
    { label: "Assembly", value: "assembly" },
    { label: "Objective-C", value: "objective-c" },
    { label: "Visual Basic", value: "visual-basic" },
    { label: "F#", value: "fsharp" },
    { label: "Elixir", value: "elixir" },
    { label: "Clojure", value: "clojure" },
    { label: "Fortran", value: "fortran" },
    { label: "Cobol", value: "cobol" },
    { label: "Ada", value: "ada" },
    { label: "Crystal", value: "crystal" },
    { label: "Erlang", value: "erlang" },
    { label: "Scheme", value: "scheme" },
    { label: "Prolog", value: "prolog" },
    { label: "Julia", value: "julia" },
    { label: "ABAP", value: "abap" },
    { label: "SAS", value: "sas" },
    { label: "VHDL", value: "vhdl" },
    { label: "Verilog", value: "verilog" },
    { label: "PostScript", value: "postscript" },
    { label: "Smalltalk", value: "smalltalk" },
    { label: "ActionScript", value: "actionscript" },
    { label: "LabVIEW", value: "labview" },
    { label: "Pascal", value: "pascal" },
    { label: "PowerShell", value: "powershell" },
    { label: "Awk", value: "awk" },
    { label: "Tcl", value: "tcl" },
    { label: "Bash", value: "bash" },
  ],
};
