import express, { Request, Response, Router } from 'express';
import Album, { AlbumDocument } from '../models/Album';

const router: Router = express.Router();

// Route pour créer un nouvel album
router.post('/albums', async (req: Request, res: Response) => {
    try {
        const { title, year, userId } = req.body;
        const album: AlbumDocument = new Album({ title, year, userId });
        await album.save();
        res.status(201).send(album);
    } catch (error) {
        console.error('Error creating album:', error);
        res.status(500).send('Server error');
    }
});

// Route pour récupérer tous les albums
router.get('/albums', async (req: Request, res: Response) => {
    try {
        const albums: AlbumDocument[] = await Album.find();
        res.send(albums);
    } catch (error) {
        console.error('Error fetching albums:', error);
        res.status(500).send('Server error');
    }
});

// Route pour mettre à jour un album par son ID
router.put('/albums/:id', async (req: Request, res: Response) => {
    try {
        const { title, year, userId } = req.body;
        const album: AlbumDocument | null = await Album.findByIdAndUpdate(req.params.id, { title, year, userId }, { new: true });
        if (album) {
            res.send(album);
        } else {
            res.status(404).send('Album not found');
        }
    } catch (error) {
        console.error('Error updating album:', error);
        res.status(500).send('Server error');
    }
});

export default router;
