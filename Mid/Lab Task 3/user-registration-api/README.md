# User Registration API (NestJS Validation)

**SL:** 29  
**Name:** Shah Jalal Dip
**ID:** 23-54777-3  
**Section:** D

## Setup
1. Install Node.js (LTS).
2. Install dependencies:
   ```
   npm install
   ```
3. Run the app:
   ```
   npm run start:dev
   ```
4. API runs at http://localhost:3000

## Endpoint
| Method | Endpoint | Description |
|---|---|---|
| POST | /users/register | Register a new user (validated by DTO + ValidationPipe) |

## Validation rules
- fullName: required string, min 3 characters
- email: required, valid email
- password: min 8 chars with uppercase, lowercase, number, special character
- age: required integer, 18 to 60
- phone: exactly 11 digits starting with 01
- accountType: "student" or "teacher"
- address: optional, min 10 characters if provided
- Unknown properties are rejected (whitelist + forbidNonWhitelisted)


## Screenshots
See the `screenshots/` folder (5 Postman tests).