import React, {useState} from 'react';
import ReactMarkdown from "react-markdown"
import './App.css';



function App() {
  const [markdown, setMarkdown] = useState("# madhujamadhuja");

  return (
    <div >
      <h2 className='heading'>MarkDown convertor</h2>
      <section className="App" >
        <div className='editor'>
          <div class="toolbar"><i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Editor<i class="fa fa-arrows-alt"></i></div>
          <textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}> </textarea>
        </div>

        <div className='output'>
          <div class="toolbar"><i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Previewer<i class="fa fa-arrows-alt"></i></div>
          <article className='result'>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>

      </section>


    </div>
  );
}

export default App;
