import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as mongoose from 'mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  mongoose.connection.on('error', (error) => {
    console.error('Erreur de connexion à la base de données:', error);
  });

  await app.listen(3000);
}

bootstrap();
