// src/components/MyMusic.tsx
import React, { useState, useEffect } from 'react';
import '../components/MyMusic.css';



const MyMusic: React.FC = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [userId, setUserId] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [albums, setAlbums] = useState<Album[]>([]);

    interface Album {
        _id: string;
        title: string;
        year: number;
        userId: string;
    }

    useEffect(() => {
        fetchAlbums();
    }, []);

    const fetchAlbums = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/albums/albums');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log("Albums loaded:", data);  // Ajoutez cette ligne pour vérifier les données
            setAlbums(data);
        } catch (error) {
            console.error("Failed to fetch albums:", error);
        }
    };

    const handleAddMusicToAlbum = (albumId: string) => {
        console.log("Tentative d'ajouter une musique à l'album ID:", albumId);
        if (!albumId) {
            console.error("L'ID de l'album est undefined");
            return;
        }
        // La logique pour ajouter une musique
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleAddAlbum = async (event: React.FormEvent) => {
        event.preventDefault();
        const albumData = {
            title,
            year: parseInt(year),
            userId
        };

        try {
            const response = await fetch('http://localhost:3000/api/albums/albums', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(albumData)
            });

            if (response.ok) {
                console.log("Album ajouté avec succès !");
                setTitle('');
                setYear('');
                setUserId('');
                setShowForm(false);
                fetchAlbums(); // Reload the albums after adding
            } else {
                console.log("Erreur lors de l'ajout de l'album");
            }
        } catch (error) {
            console.error("Erreur réseau ou serveur", error);
        }
    };

    return (
        <div>
            <button onClick={toggleForm} className="button">Ajouter un album</button>
            {showForm && (
                <form onSubmit={handleAddAlbum}>
                    <h2>Ajouter un album</h2>
                    <label htmlFor="title">Titre de l'album:</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="year">Année:</label>
                    <input
                        id="year"
                        type="number"
                        value={year}
                        onChange={e => setYear(e.target.value)}
                        required
                    />
                    <label htmlFor="userId">ID Utilisateur:</label>
                    <input
                        id="userId"
                        type="text"
                        value={userId}
                        onChange={e => setUserId(e.target.value)}
                        required
                    />
                    <button type="submit" className="button">Soumettre</button>
                </form>
            )}
            <div>
            <h1>Ma Musique</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {albums.map((album) => (
                    <div key={album._id} className="album-card">
                        <h2>{album.title}</h2>
                        <p>Année: {album.year}</p>
                        <button onClick={() => handleAddMusicToAlbum(album._id)}>+ Ajouter Musique</button>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default MyMusic;
