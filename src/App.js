import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">
          This dictionary was created by Ami Fukuyama
        </footer>
      </div>
    </div>
  );
}

export default App;
