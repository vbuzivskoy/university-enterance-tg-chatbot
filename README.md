# university-enterance-tg-chatbot
Backend of Telegram bot for communication between the university and applicants


Diagram link
https://dbdiagram.io/d/628df595f040f104c19339b2

Postman link 
https://www.getpostman.com/collections/8e901a8e93bdb4270446


## DB migration
```DATABASE_URL``` enviroment variable or ```.env``` file with it (in project's root folder)  must be set.

* ```npm run db-create``` - creates database
* ```npm run db-drop``` - drops database
* ```npm run db-migrate``` - migrates all migration files (creates all tables in our case)
* ```npm run db-migrate-undo``` - undoes all migrations (drop all tables in our case)
* ```npm run db-seed``` - mocks tables with data
* ```npm run db-seed-undo``` - removes all mocked data