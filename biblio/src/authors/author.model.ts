import * as mongoose from 'mongoose';

export const AuthorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: Date, required: true },
  // Ajoutez d'autres champs d'auteur si nécessaire
});

export interface Author extends mongoose.Document {
  name: string;
  birthdate: Date;
}
