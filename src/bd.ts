import * as constants from './const'
const pg = require('pg')

const client = new pg.Client(constants.conString);

function connectToDatabase() {
    return client.connect()
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

function createUser(routeData: IUser) {
    return client
        .query(`INSERT INTO users (tg_id, tg_username, pnohe_number, user_type, city, type_id, state)
                values ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *`,
            [routeData.tgId, routeData.tgUsername, routeData.phoneNumber, routeData.userType,
                routeData.city, routeData.roleId, routeData.state]
        )
}


export {connectToDatabase, createUser}
