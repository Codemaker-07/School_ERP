import express from 'express';
import connect from './config/db';
import dotenv from 'dotenv';
import admin_router from './routes/admin_route';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/admin', admin_router);

app.listen(process.env.port, () => {
    connect();
    console.log('Server is running on port 3000');
});