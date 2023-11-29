import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.model';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(@Body() bookData: Book) {
    return this.booksService.create(bookData);
  }

  @Get()
  async findAll() {
    return this.booksService.findAll();
  }
}
