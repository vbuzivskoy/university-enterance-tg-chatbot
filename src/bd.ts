import * as constants from './const'
import pg from 'pg'
import {Sequelize} from "sequelize";
import {IUser, User} from "./models";

const db = new Sequelize(
    constants.conString,
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
);

function synchronizeDataBase() {
    db.sync({alter: true})
        .then(() => {
            console.log("All models were synchronized successfully.")
        })
        .catch(err => {
            console.log(err);
        })
}


async function connectToDB() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

//db connect settings
pg.defaults.ssl = true;
const client = new pg.Client({
    connectionString: constants.conString,
    ssl: {rejectUnauthorized: false}
});

function connectToDatabase(): void {
    client.connect()
        .then(() => {
            return client
                .query('SELECT NOW() AS "theTime"')
        })
        .then((data: any): void => {
            console.log('DB connected ', data.rows[0].theTime);
        })
        .catch((err: any) => {
            console.error('Error: ', err)
        })
}

function createUser(routeData: IUser): Promise<any> {
    return client
        .query(`INSERT INTO public.users (tg_id, tg_username, pnohe_number, user_type, city, type_id, state)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *`,
            [routeData.tgId, routeData.tgUsername, routeData.phoneNumber, routeData.userType,
                routeData.city, routeData.roleId, routeData.state]
        )
}

function deleteUser(userId: number | string): Promise<any> {
    return client
        .query('DELETE FROM users WHERE id = $1', [userId])
}

function getUser(userId: number | string): Promise<any> {
    return client
        .query('SELECT * FROM users WHERE id = $1', [userId])
}

function getAllUsers(): Promise<any> {
    return client
        .query('SELECT * FROM users')
}

export {connectToDatabase, createUser, deleteUser, getUser, getAllUsers, connectToDB, db, synchronizeDataBase}
