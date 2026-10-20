import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProductsAndEmployees1760954400000 implements MigrationInterface {
  name = "CreateProductsAndEmployees1760954400000";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "character varying" },
          { name: "category", type: "character varying" },
          { name: "price", type: "double precision" },
          { name: "quantity", type: "integer" },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "name", type: "character varying" },
          { name: "email", type: "character varying", isUnique: true },
          { name: "phone", type: "character varying" },
          { name: "password", type: "character varying" },
          { name: "age", type: "integer" },
          { name: "years_of_working", type: "integer" },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("employees");
    await queryRunner.dropTable("products");
  }
}
