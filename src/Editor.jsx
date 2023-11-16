import React, { useState } from 'react'

function Editor() {

    const [html,setHtml]=useState("");

    const[css,setCss]=useState("");
    const[js,setJs]=useState("");
  return (
     <div>
        <textarea value={html} type="text" onChange={(e)=>{setHtml(e.target.value)}}/>

        <textarea value={css} type="text" onChange={(e)=>{setCss(e.target.value)}}/>
        <textarea value={js} type="text" onChange={(e)=>{setJs(e.target.value)}}/>
     </div>
  )
}

export default Editor