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
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
// Route pour enregistrer un utilisateur
router.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, walletAddress, role } = req.body;
        const user = new User_1.default({ email, walletAddress, role });
        yield user.save();
        res.status(201).send(user);
    }
    catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour récupérer tous les utilisateurs
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        res.send(users);
    }
    catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour récupérer un utilisateur
router.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour modifier un utilisateur
router.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, walletAddress, role } = req.body;
        const user = yield User_1.default.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.email = email || user.email;
        user.walletAddress = walletAddress || user.walletAddress;
        user.role = role || user.role;
        yield user.save();
        res.send(user);
    }
    catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Server error');
    }
}));
// Route pour supprimer un utilisateur
router.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield User_1.default.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    }
    catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send('Server error');
    }
}));
exports.default = router;
