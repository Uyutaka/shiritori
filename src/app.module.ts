import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { GamesController } from './games/games.controller';

@Module({
  imports: [],
  controllers: [AppController, GamesController],
  providers: [AppService],
})
export class AppModule {}
