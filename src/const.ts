import dotenv from 'dotenv';

dotenv.config();

declare let process: {
    env: {
        DATABASE_URL: string
    }
};

const conString = process.env.DATABASE_URL;

export { conString };
