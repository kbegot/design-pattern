// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LibraryModule } from './library/library.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:mdp@mongodb:27017', {
      dbName: 'bibliotheque',
    }),
    LibraryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
