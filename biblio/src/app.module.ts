// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:mdp@mongodb:27017', {
      dbName: 'bibliotheque',
    }),
    BooksModule,
    AuthorsModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
