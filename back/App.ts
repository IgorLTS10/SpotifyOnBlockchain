import express, { Application } from 'express';
import connectDB from './databases';
import usersRouter from  './src/routes/routesUser'; // Assurez-vous que le chemin est correct
import albumsRouter from './src/routes/routesAlbum'; // Assurez-vous que le chemin est correct
import musicsRouter from './src/routes/routesMusic'; // Assurez-vous que le chemin est correct

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
connectDB();


// Utilisez les routes définies pour les utilisateurs
app.use('/api/users', usersRouter);
app.use('/api/albums', albumsRouter);
app.use('/api/musics', musicsRouter);

const PORT: number = parseInt(process.env.PORT || '3000'); // Utilisez parseInt pour convertir PORT en nombre
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
