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
const Album_1 = __importDefault(require("../models/Album"));
const router = express_1.default.Router();
// Route pour créer un nouvel album
router.post('/albums', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, year, userId } = req.body;
        const album = new Album_1.default({ title, year, userId });
        yield album.save();
        res.status(201).send(album);
    }
    catch (error) {
        console.error('Error creating album:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour récupérer tous les albums
router.get('/albums', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const albums = yield Album_1.default.find();
        res.send(albums);
    }
    catch (error) {
        console.error('Error fetching albums:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour mettre à jour un album par son ID
router.put('/albums/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, year, userId } = req.body;
        const album = yield Album_1.default.findByIdAndUpdate(req.params.id, { title, year, userId }, { new: true });
        if (album) {
            res.send(album);
        }
        else {
            res.status(404).send('Album not found');
        }
    }
    catch (error) {
        console.error('Error updating album:', error);
        res.status(500).send('Server error');
    }
}));
exports.default = router;
