// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <Link to="/playlists">Mes playlists</Link>
            <Link to="/favorites">Mes favoris</Link>
            <Link to="/releases">Dernières sorties</Link>
            <Link to="/mymusic">Mes créations</Link>
        </div>
    );
};

export default Sidebar;
