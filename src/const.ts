require('dotenv').config();

declare var process : {
    env: {
        DATABASE_URL: string
    }
}

const conString = process.env.DATABASE_URL;

export { conString };