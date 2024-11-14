import express from 'express';
import connect from './db';

const app = express();

app.listen(3000, () => {
    connect();
    console.log('Server is running on port 3000');
});