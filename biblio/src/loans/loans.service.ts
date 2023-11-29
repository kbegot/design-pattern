import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Loan } from './loan.model';

@Injectable()
export class LoansService {
  constructor(@InjectModel('Loan') private readonly loanModel: Model<Loan>) {}

  async create(loanData: Loan): Promise<Loan> {
    const createdLoan = new this.loanModel(loanData);
    return createdLoan.save();
  }

  async findAll(): Promise<Loan[]> {
    return this.loanModel.find().exec();
  }
}
