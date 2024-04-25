import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MyMusic from './components/MyMusic';  // Assurez-vous que ce composant est correctement importé

const Home: React.FC = () => <div>Home Page</div>;
const MyPlaylist: React.FC = () => <div>My Playlist Page</div>;
const Type: React.FC = () => <div>Type Page</div>;
const Playlists: React.FC = () => <div>Playlists Page</div>;
const Favorites: React.FC = () => <div>Favorites Page</div>;
const Releases: React.FC = () => <div>Releases Page</div>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlists" element={<MyPlaylist />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/releases" element={<Releases />} />
            <Route path="/myplaylists" element={<Playlists />} />
            <Route path="/type" element={<Type />} />
            <Route path="/mymusic" element={<MyMusic />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
