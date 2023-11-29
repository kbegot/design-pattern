// src/library/library.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './book.model';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel(Book.name) private readonly bookModel: Model<Book>,
  ) {}

  async createBook(
    title: string,
    author: string,
    category: string,
    subcategory: string,
    year: Date,
  ): Promise<Book> {
    const createdBook = new this.bookModel({
      title,
      author,
      category,
      subcategory,
      year,
    });
    return createdBook.save();
  }

  async getAllBooks(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
