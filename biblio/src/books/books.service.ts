import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.model';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(bookData: Book): Promise<Book> {
    const createdBook = new this.bookModel(bookData);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async updateBookStatus(bookId: string, isAvailable: boolean): Promise<Book> {
    return this.bookModel
      .findByIdAndUpdate(bookId, { isAvailable }, { new: true })
      .exec();
  }
}
