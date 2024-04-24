"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3001; // Utilisez un port différent de celui du frontend
app.get('/', (req, res) => {
    res.send('Hello Blockchain Spotify!');
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
