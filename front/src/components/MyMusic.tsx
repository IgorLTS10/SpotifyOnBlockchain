// src/components/MyMusic.tsx
import React, { useState, useEffect } from 'react';
import '../components/MyMusic.css';



const MyMusic: React.FC = () => {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [userId, setUserId] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [albums, setAlbums] = useState<Album[]>([]);
    const [showMusicForm, setShowMusicForm] = useState(false);
    const [currentAlbumId, setCurrentAlbumId] = useState<string | null>(null);
    const [musicTitle, setMusicTitle] = useState('');

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
        setCurrentAlbumId(albumId);
        setShowMusicForm(true);  // Affiche le formulaire pour ajouter une musique
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleSubmitMusic = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!currentAlbumId) return;

        try {
            const musicData = {
                title: musicTitle,
                albumId: currentAlbumId,
            };
            const response = await fetch('http://localhost:3000/api/albums/albums', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(musicData),
            });
            if (response.ok) {
                console.log("Musique ajoutée avec succès!");
                setMusicTitle('');
                setCurrentAlbumId(null);  // Correct now
            } else {
                console.error("Erreur lors de l'ajout de la musique");
            }
        } catch (error) {
            console.error("Erreur réseau ou serveur", error);
        }
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
                    {/* Formulaire pour ajouter un album */}
                </form>
            )}
            <h1>Ma Musique</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {albums.map((album) => (
                    <div key={album._id} className="album-card">
                        <h2>{album.title} - {album.year}</h2>
                        <button onClick={() => handleAddMusicToAlbum(album._id)}>+</button>
                    </div>
                ))}
            </div>
            {showMusicForm && (
                <form onSubmit={handleSubmitMusic}>
                    <label htmlFor="musicTitle">Titre de la musique:</label>
                    <input
                        id="musicTitle"
                        type="text"
                        value={musicTitle}
                        onChange={(e) => setMusicTitle(e.target.value)}
                        required
                    />
                    <button type="submit">Soumettre</button>
                </form>
            )}
        </div>
    );
};

export default MyMusic;
