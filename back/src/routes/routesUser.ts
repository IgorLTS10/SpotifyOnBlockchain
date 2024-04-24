import express, { Request, Response, Router } from 'express';
import User, { UserDocument } from '../models/User';
import e from 'express';
import exp from 'constants';

const router: Router = express.Router();

// Route pour enregistrer un utilisateur
router.post('/users', async (req: Request, res: Response) => {
    try {
        const { email, walletAddress, role } = req.body;
        const user: UserDocument = new User({ email, walletAddress, role });
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Server error');
    }
});

// Route pour récupérer tous les utilisateurs
router.get('/users', async (req: Request, res: Response) => {
    try {
        const users: UserDocument[] = await User.find();
        res.send(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Server error');
    }
});

// Route pour récupérer un utilisateur
router.get('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: UserDocument | null = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Server error');
    }
});



// Route pour modifier un utilisateur
router.put('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { email, walletAddress, role } = req.body;

        const user: UserDocument | null = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.email = email || user.email;
        user.walletAddress = walletAddress || user.walletAddress;
        user.role = role || user.role;

        await user.save();
        res.send(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Server error');
    }
});

// Route pour supprimer un utilisateur

router.delete('/users/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user: UserDocument | null = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Server error');
    }
});

export default router;