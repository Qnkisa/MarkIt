import React, { useState } from 'react';
import {marked} from 'marked';
import "./App.css"

function App() {
  const defaultText = `
# This is an H1 header
## This is an H2 sub-header
[This is a link](https://www.freecodecamp.org)
This is \`inline code\`
\`\`\`
This is a code block
\`\`\`
- This is a list item
> This is a blockquote
![This is an image](https://images.unsplash.com/photo-1520198756765-5a810fda9663)
**This is bolded text**

This text has a  
line break.
`;

  const [markdownText, setMarkdownText] = React.useState(defaultText);

  const handleInputChange = (event) => {
    setMarkdownText(event.target.value);
  };

  React.useEffect(() => {
    const preview = document.getElementById("preview");
    preview.innerHTML = marked(markdownText, { breaks: true });
  }, [markdownText]);

  return (
    <div className="big-project">
      <h1>MarkIt - HTML Markdown Previewer</h1>
      <div className="project">
        <div className="project-input">
          <textarea
            onChange={handleInputChange}
            value={markdownText}
            id="editor"
            defaultValue={defaultText}
          />
        </div>
        <div className="project-output">
          <div
            dangerouslySetInnerHTML={{ __html: marked(markdownText, { breaks: true }) }}
            id="preview"
          />
        </div>
      </div>
      <p>
        By{" "}
        <a href="https://github.com/Qnkisa" target={"_blank"}>
          Yanislav Angelov
        </a>
      </p>
    </div>
  );
}



export default App;