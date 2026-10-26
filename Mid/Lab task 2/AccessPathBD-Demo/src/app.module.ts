import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { dataSourceOptions } from "./config/database.config";
import { BuildingModule } from "./modules/building/building.module";
import { ReviewModule } from "./modules/review/review.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      migrationsRun: true,
    }),
    UserModule,
    BuildingModule,
    ReviewModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
