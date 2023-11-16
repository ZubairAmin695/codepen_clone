import React, { useEffect, useState } from "react";
import useLocalStorage from "./storage";


function Editor() {
  const [html, setHtml] = useLocalStorage("html","");

  const [css, setCss] = useLocalStorage("css","");
  const [js, setJs] = useLocalStorage("js","");
  const [codepenCode, setCodepenCode] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCodepenCode(
        `<html>
          <head>
            <style>${css}</style>
          </head>
          <body>${html}</body>
          <script>${js}</script>
        </html>`
      );
    }, 200);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="wrapper">
      <div className="header">
        <span>CodePen</span>
      </div>
      <div className="input-cover">
        <textarea
          value={html}
          type="text"
          placeholder="HTML"
          className="input"
          onChange={(e) => {
            setHtml(e.target.value);
          }}
        />

        <div className="width" />

        <textarea
          value={css}
          type="text"
          placeholder="CSS"
          className="input"
          onChange={(e) => {
            setCss(e.target.value);
          }}
        />

        <div className="width" />
        <textarea
          value={js}
          type="text"
          placeholder="Js"
          className="input"
          onChange={(e) => {
            setJs(e.target.value);
          }}
        />
      </div>

      <div className="output">
        <iframe
          srcDoc={codepenCode}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Editor;
