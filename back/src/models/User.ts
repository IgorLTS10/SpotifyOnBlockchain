import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
    email: string;
    walletAddress: string;
    role: string;
}

const userSchema = new Schema<UserDocument>({
    email: { type: String, required: true },
    walletAddress: { type: String, required: true },
    role: { type: String, required: true }
});

export default mongoose.model<UserDocument>('User', userSchema);
