import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import './App.css';
import { marked } from 'marked';

function App() {
  const defaultMarkdown = `
# This is a Header (H1)

## This is a sub-header (H2)

[This is a link](https://www.example.com)

...
Here's some \`inline code\`.
...
\`\`\`
This is a block of code.
function hello() {
  console.log("Hello, World!");
}
\`\`\`

- This is a list item
- Another list item

> This is a blockquote.

![This is an image](https://via.placeholder.com/150)

**This is bolded text.**
`;
  const [markdown, setMarkdown] = useState(defaultMarkdown);


  return (
    <div >
      <h2 className='heading'>MarkDown convertor</h2>
      <section className="App" >
        <div className='editor'>
          <div className="toolbar">Editor</div>
          <textarea id="editor" className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}> </textarea>
        </div>

        <div className='output'>
          <div className="toolbar">Previewer</div>
          <article className='result' >
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
          </article>
        </div>

      </section>
    </div>
  );
}

export default App;
