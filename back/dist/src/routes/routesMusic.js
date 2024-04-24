"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Music_1 = __importDefault(require("../models/Music"));
const router = express_1.default.Router();
// Route pour créer une nouvelle musique
router.post('/musics', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, year, artistId, albumId, listenNumber } = req.body;
        const music = new Music_1.default({ title, year, artistId, albumId, listenNumber });
        yield music.save();
        res.status(201).send(music);
    }
    catch (error) {
        console.error('Error creating music:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour récupérer toutes les musiques
router.get('/musics', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const musics = yield Music_1.default.find();
        res.send(musics);
    }
    catch (error) {
        console.error('Error fetching musics:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour mettre à jour une musique par son ID
router.put('/musics/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, year, artistId, albumId, listenNumber } = req.body;
        const music = yield Music_1.default.findByIdAndUpdate(req.params.id, { title, year, artistId, albumId, listenNumber }, { new: true });
        if (music) {
            res.send(music);
        }
        else {
            res.status(404).send('Music not found');
        }
    }
    catch (error) {
        console.error('Error updating music:', error);
        res.status(500).send('Server error');
    }
}));
exports.default = router;
