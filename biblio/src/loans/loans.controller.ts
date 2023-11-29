import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoansService } from './loans.service';
import { Loan } from './loan.model';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  async create(@Body() loanData: Loan) {
    return this.loansService.create(loanData);
  }

  @Get()
  async findAll() {
    return this.loansService.findAll();
  }
}
