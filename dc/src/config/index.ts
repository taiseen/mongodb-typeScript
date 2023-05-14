import dotenv from 'dotenv';

dotenv.config();

export const DB_URL = process.env.DB_URL!
export const PORT = process.env.PORT

// (!) if null value come then don't throw any error...