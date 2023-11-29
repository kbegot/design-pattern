// src/library/subcategory.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Subcategory extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const SubcategorySchema = SchemaFactory.createForClass(Subcategory);
