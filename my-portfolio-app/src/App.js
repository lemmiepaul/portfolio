import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi, My name is <span>Lemmie Paul</span>
        </p>
        <button>
        <a
          className="App-link"
          href="c:\Users\Stephen Nsubuga\OneDrive\Desktop\Galimaka Lemmie Paul\Curriculum vitae.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
        </button>
      </header>
    </div>
  );
}

export default App;
