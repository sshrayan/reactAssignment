import React, { useState } from "react";

function App() {
  return (
    <div>
      <Header title="My App" />
      <Content />
      <Footer />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    setText("Entered text: " + text);
  };

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea onChange={handleTextAreaChange}></textarea>
      <br />
      <button onClick={handleButtonClick}>Submit</button>
      <p>{text}</p>
    </div>
  );
}

function Footer() {
  const quote = "If failure makes you stronger, you can never lose.";

  return (
    <footer>
      <p>Created by Sayhan</p>
      <p>{quote}</p>
    </footer>
  );
}

export default App;
