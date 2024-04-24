import mongoose, { Document, Schema } from 'mongoose';

export interface MusicData {
    title: string;
    year: number;
    artistId: string;
    albumId: string;
    listenNumber: number;
}

export interface MusicDocument extends Document, MusicData {}

const musicSchema = new Schema<MusicDocument>({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    artistId: { type: String, required: true },
    albumId: { type: String, required: true },
    listenNumber: { type: Number, default: 0 }
});

export default mongoose.model<MusicDocument>('Music', musicSchema);
