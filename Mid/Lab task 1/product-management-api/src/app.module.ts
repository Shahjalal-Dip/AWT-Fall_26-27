import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeesModule } from "./modules/employees/employees.module";
import { ProductsModule } from "./modules/products/products.module";
import { AppController } from "./app.controller";
import { dataSourceOptions } from "./config/database.config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      migrationsRun: true,
    }),
    ProductsModule,
    EmployeesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
