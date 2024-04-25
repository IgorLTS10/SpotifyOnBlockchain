// src/components/MyMusic.tsx
import React from 'react';
import '../components/MyMusic.css';

const MyMusic: React.FC = () => {
    const handleAddMusic = () => {
        console.log("Ajouter une musique");
        // Ici, vous pouvez ajouter la logique pour ouvrir un formulaire d'ajout ou quelque chose de similaire
    };

    return (
        <div>
            <h1>Ma Musique</h1>
            <button onClick={handleAddMusic} className="button">Ajouter une musique</button>
        </div>
    );
};

export default MyMusic;
