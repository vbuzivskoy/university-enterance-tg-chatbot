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

export {connectToDatabase}
