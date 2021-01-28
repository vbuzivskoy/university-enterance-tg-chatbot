import * as constants from './const'
const pg = require('pg')

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

export {connectToDatabase, createUser, deleteUser, getUser, getAllUsers}
