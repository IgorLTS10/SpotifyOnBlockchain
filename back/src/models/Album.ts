import mongoose, { Document, Schema } from 'mongoose';

export interface AlbumDocument extends Document {
    title: string;
    year: number;
    userId: string;
}

const albumSchema = new Schema<AlbumDocument>({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    userId: { type: String, required: true }
});

export default mongoose.model<AlbumDocument>('Album', albumSchema);
