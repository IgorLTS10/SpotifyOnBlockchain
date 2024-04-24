import express, { Request, Response, Router } from 'express';
import Music, { MusicDocument, MusicData } from '../models/Music';

const router: Router = express.Router();

// Route pour créer une nouvelle musique
router.post('/musics', async (req: Request, res: Response) => {
    try {
        const { title, year, artistId, albumId, listenNumber }: MusicData = req.body;
        const music: MusicDocument = new Music({ title, year, artistId, albumId, listenNumber });
        await music.save();
        res.status(201).send(music);
    } catch (error) {
        console.error('Error creating music:', error);
        res.status(500).send('Server error');
    }
});

// Route pour récupérer toutes les musiques
router.get('/musics', async (req: Request, res: Response) => {
    try {
        const musics: MusicDocument[] = await Music.find();
        res.send(musics);
    } catch (error) {
        console.error('Error fetching musics:', error);
        res.status(500).send('Server error');
    }
});

// Route pour mettre à jour une musique par son ID
router.put('/musics/:id', async (req: Request, res: Response) => {
    try {
        const { title, year, artistId, albumId, listenNumber }: MusicData = req.body;
        const music: MusicDocument | null = await Music.findByIdAndUpdate(req.params.id, { title, year, artistId, albumId, listenNumber }, { new: true });
        if (music) {
            res.send(music);
        } else {
            res.status(404).send('Music not found');
        }
    } catch (error) {
        console.error('Error updating music:', error);
        res.status(500).send('Server error');
    }
});

export default router;
