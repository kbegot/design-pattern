import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from './books/books.module';
import { AuthorsModule } from './authors/authors.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    BooksModule,
    AuthorsModule,
    CategoriesModule,
    MongooseModule.forRoot('your-mongodb-connection-string'),
  ],
})
export class AppModule {}
