import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
     Hello
      </header>
      <footer>
          This project is created by {""}
          <a href="https://www.linkedin.com/in/kristilerla/">Kristil Erla</a> and is open sourced on {""}
      <a href="https://github.com/kristilerla/monday-weather-app"> Github</a>
    </footer>
    </div>
  );
}

export default App;

