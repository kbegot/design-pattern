import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Loan } from './loan.model';
import { BooksService } from '../books/books.service';

@Injectable()
export class LoansService {
  constructor(
    @InjectModel('Loan') private readonly loanModel: Model<Loan>,
    private readonly booksService: BooksService,
  ) {}

  async create(loanData: Loan): Promise<Loan> {
    // Utilise la date actuelle pour la startDate
    loanData.startDate = new Date();

    // Calcule la endDate en ajoutant 30 jours à la startDate
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);
    loanData.endDate = endDate;

    // Convertit l'ObjectId en chaîne avant de l'utiliser
    const bookIdAsString = loanData.book.toString();

    // Met à jour le statut du livre associé à "isAvailable: false"
    await this.booksService.updateBookStatus(bookIdAsString, false);

    const createdLoan = new this.loanModel(loanData);
    return createdLoan.save();
  }

  async findAll(): Promise<Loan[]> {
    return this.loanModel.find().exec();
  }
}
