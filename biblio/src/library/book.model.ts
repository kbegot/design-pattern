// src/library/book.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  category: string;

  @Prop()
  subcategory: string;

  @Prop()
  year: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
