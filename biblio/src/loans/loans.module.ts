import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller';
import { LoansService } from './loans.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksModule } from '../books/books.module';
import { LoanSchema } from './loan.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Loan', schema: LoanSchema }]),
    BooksModule,
  ],
  controllers: [LoansController],
  providers: [LoansService],
})
export class LoansModule {}
