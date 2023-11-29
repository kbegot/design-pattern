import { Controller, Post, Body, Get } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from './author.model';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() authorData: Author) {
    return this.authorsService.create(authorData);
  }

  @Get()
  async findAll() {
    return this.authorsService.findAll();
  }
}
