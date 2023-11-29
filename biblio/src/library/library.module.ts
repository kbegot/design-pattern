// src/library/library.module.ts
import { Module } from '@nestjs/common';
import { LibraryController } from './library.controller';
import { LibraryService } from './library.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './book.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [LibraryController], // Correct: LibraryController est dans le tableau controllers
  providers: [LibraryService], // Correct: LibraryService est dans le tableau providers
})
export class LibraryModule {}
