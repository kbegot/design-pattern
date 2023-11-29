import * as mongoose from 'mongoose';

export const LoanSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: { type: Date, default: Date.now, required: true },
  endDate: { type: Date, required: true },
});

export interface Loan extends mongoose.Document {
  book: mongoose.Types.ObjectId;
  borrower: mongoose.Types.ObjectId;
  startDate: Date;
  endDate: Date;
}
