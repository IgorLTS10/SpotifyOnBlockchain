// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Connect from './Connect';
import '../components/Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <h1>SpotifyOnBlockchain</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/playlist">Playlist</Link>
                <Link to="/type">Type</Link>
            </div>
            <Connect/>
        </nav>
    );
};

export default Navbar;
