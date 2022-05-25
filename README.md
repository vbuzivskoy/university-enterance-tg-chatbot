# university-enterance-tg-chatbot
Telegram bot API server bot for communication between the university and applicants


Diagram link
https://dbdiagram.io/d/628df595f040f104c19339b2

Postman link 
https://www.getpostman.com/collections/8e901a8e93bdb4270446

### Setup
* Install Node.js
* Install PostgreSQL
* Run ```npm install``` command

### DB setup
```DATABASE_URL``` enviroment variable or ```.env``` file with it (in project's root folder)  must be set.

* ```npm run db-create``` - creates database
* ```npm run db-drop``` - drops database
* ```npm run db-migrate``` - migrates all migration files (creates all tables in our case)
* ```npm run db-migrate-undo``` - undoes all migrations (drop all tables in our case)
* ```npm run db-seed``` - mocks tables with data
* ```npm run db-seed-undo``` - removes all mocked data

### Build project
Run ```npm build``` command

### Start project
Run ```npm start``` command

### Start project in development mode (watch mode)
Run ```npm run start:dev``` command