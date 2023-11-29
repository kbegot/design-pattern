import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  year: { type: Number, required: true },
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  isAvailable: { type: Boolean, default: true },
});

export interface Book extends mongoose.Document {
  year: number;
  title: string;
  author: mongoose.Types.ObjectId;
  category: mongoose.Types.ObjectId;
  isAvailable: boolean;
}
