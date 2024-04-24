"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const databases_1 = __importDefault(require("./databases"));
const routesUser_1 = __importDefault(require("./src/routes/routesUser")); // Assurez-vous que le chemin est correct
const routesAlbum_1 = __importDefault(require("./src/routes/routesAlbum")); // Assurez-vous que le chemin est correct
const routesMusic_1 = __importDefault(require("./src/routes/routesMusic")); // Assurez-vous que le chemin est correct
const app = (0, express_1.default)();
const cors = require('cors');
app.use(cors());
app.use(express_1.default.json());
(0, databases_1.default)();
// Utilisez les routes définies pour les utilisateurs
app.use('/api/users', routesUser_1.default);
app.use('/api/albums', routesAlbum_1.default);
app.use('/api/musics', routesMusic_1.default);
const PORT = parseInt(process.env.PORT || '3000'); // Utilisez parseInt pour convertir PORT en nombre
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
