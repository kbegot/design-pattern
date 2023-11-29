import { Controller, Post, Body, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './categorie.model';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() categoryData: Category) {
    return this.categoriesService.create(categoryData);
  }

  @Get()
  async findAll() {
    return this.categoriesService.findAll();
  }
}
