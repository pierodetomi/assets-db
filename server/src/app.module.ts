import { Module } from '@nestjs/common';
import { DbService } from './services/db.service';
import { AssetsController } from './controllers/assets.controller';
import { AppConfigService } from './services/app-config.service';

@Module({
  imports: [],
  controllers: [AssetsController],
  providers: [
    AppConfigService,
    DbService
  ],
})
export class AppModule { }