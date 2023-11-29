import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Ajoutez d'autres champs de catégorie si nécessaire
});

export interface Category extends mongoose.Document {
  name: string;
}
