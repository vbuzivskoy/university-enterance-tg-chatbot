# university-enterance-tg-chatbot
Backend of Telegram bot for communication between the university and applicants


Diagram link
https://dbdiagram.io/d/6012d60e80d742080a383d3b

Postman link 
https://www.getpostman.com/collections/8e901a8e93bdb4270446


## DB migration
```DATABASE_URL``` enviroment variable or ```.env``` file with it (in project's root folder)  must be set.

* ```npx sequelize-cli db:create``` - creates database
* ```npx sequelize-cli db:drop``` - drops database
* ```npx sequelize-cli db:migrate``` - migrates all migration files (creates all tables in our case)
* ```npx sequelize-cli db:migrate:undo``` - undoes all migrations (drop all tables in our case)
* ```npx sequelize-cli db:seed:all``` - mocks tables with data
* ```npx sequelize-cli db:seed:undo``` - removes all mocked data