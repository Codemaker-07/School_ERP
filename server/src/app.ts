import express  from 'express';
import connect from './config/db';
import dotenv from 'dotenv';
import admin_router from './routes/admin_route';
import gradeRoute from './routes/grade_routes';
import studentRoutes from "./routes/student_routes";



dotenv.config();
const app = express();

app.use(express.json());

app.use('/admin', admin_router);

app.use("/students", studentRoutes);

app.use("/grade",gradeRoute);
app.listen(process.env.port, () => {
    connect();
    console.log('Server is running');
});