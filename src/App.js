import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">
          This dictionary was created by{" "}
          <a href="https://github.com/Ami0480" target="_blank" rel="noreferrer">
            Ami Fukuyama
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/Ami0480/react-dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            is sourced on GitHub
          </a>
          {"  "}and{" "}
          <a
            href="https://effortless-meringue-e38e27.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            is hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
