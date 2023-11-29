// src/mongoose.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/votre-base-de-donnees'),
  ],
})
export class CustomMongooseModule {} // Renommez votre module personnalisé
