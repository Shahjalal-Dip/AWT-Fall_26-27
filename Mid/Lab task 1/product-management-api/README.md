# Product Management API

NestJS REST API for managing shop products and employees. PostgreSQL records
are created and managed with TypeORM.

## Student details

- **Name:** [Your full name]
- **Student ID:** [Your student ID]
- **Section:** [Your section]

Replace the placeholders above before submission.

## Requirements

- Node.js 20 or later (Node.js 22 is specified in `.nvmrc`)
- pnpm (or npm)
- PostgreSQL

## Setup

1. Create a PostgreSQL database:

   ```sql
   CREATE DATABASE product_management;
   ```

2. Copy `.env.example` to `.env` and set the PostgreSQL username, password,
   host, port, and database name for your local installation. Do not commit
   `.env`.
3. Install dependencies, run the database migration, and start the API:

   ```bash
   pnpm install
   pnpm migration:run
   pnpm start:dev
   ```

   With npm, use `npm install`, `npm run migration:run`, and
   `npm run start:dev`. Migrations also run automatically when the API starts.

The API runs at `http://localhost:3000` by default. The initial migration
creates the products and employees tables. The Swagger UI is available at
`http://localhost:3000/api`.

## Endpoints

| Method | Endpoint         | Behavior                        |
| ------ | ---------------- | ------------------------------- |
| POST   | `/products`      | Create a product                |
| GET    | `/products`      | List all products               |
| GET    | `/products/:id`  | Get a product by ID             |
| PATCH  | `/products/:id`  | Update provided product fields  |
| DELETE | `/products/:id`  | Delete a product                |
| POST   | `/employees`     | Create an employee              |
| GET    | `/employees`     | List all employees              |
| GET    | `/employees/:id` | Get an employee by ID           |
| PATCH  | `/employees/:id` | Update provided employee fields |
| DELETE | `/employees/:id` | Delete an employee              |

Product fields: `name` (string), `category` (string), `price` (number), and
`quantity` (non-negative integer).

Employee fields: `name`, `email`, `phone`, `password`, `age` (integer), and
`yearsOfWorking` (non-negative integer).

POST and PATCH requests use JSON bodies. PATCH accepts any subset of the fields
for its resource. Invalid request fields and values return a validation error;
requests for missing IDs return `404 Not Found`.

## Postman evidence

Save the seven requested Postman captures in `screenshots/` as
`01-create.png`, `02-get-all.png`, `03-get-by-id.png`, `04-update.png`,
`05-confirm-update.png`, `06-delete.png`, and `07-confirm-delete.png`.
Capture the live API responses after starting the application and database;
the screenshots must show the method, full URL, response status, and response
body, as applicable.
