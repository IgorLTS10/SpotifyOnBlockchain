import React from 'react';
import './App.css';
import Connect from './components/Connect';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon application Spotify avec Blockchain</h1>
        {/* Utilisez votre composant ConnectButton ici */}
        <Connect />
      </header>
    </div>
  );
};

export default App;
