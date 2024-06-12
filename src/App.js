import logo from './logo.png';
import './App.css';

import Dictionary from "./Dictionary";
import Jodahelp from "./Jodahelp";
import ChatGPT from './ChatGPT';







function App() {
  return (
    <div className="App">
      <div className='Container'>
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
    
      </header>
      <main>
        <Dictionary defaultKeyword="wine" />

        <Jodahelp />

        <ChatGPT />


      </main>
      <footer className='App-footer'>
          This project is created by {""}
          <a href="https://www.linkedin.com/in/kristilerla/" target='blanc'>Kristil Erla</a> and is open sourced on {""}
      <a href="https://github.com/kristilerla/yoda-help" target='blank'> Github</a>
    </footer>
    </div>
    </div>
  );
}

export default App;

