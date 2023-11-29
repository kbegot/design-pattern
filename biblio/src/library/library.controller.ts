// src/library/library.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { LibraryService } from './library.service';

@Controller('library')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post('books')
  async createBook(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
    @Body('subcategory') subcategory: string,
    @Body('year') year: Date,
  ) {
    return this.libraryService.createBook(
      title,
      author,
      category,
      subcategory,
      year,
    );
  }

  @Get('books')
  async getAllBooks() {
    return this.libraryService.getAllBooks();
  }
}
