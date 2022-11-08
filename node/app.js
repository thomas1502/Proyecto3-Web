import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import studentRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/assistance', studentRoutes);

try {
    await db.authenticate();
    console.log('Conexion Completada');
} catch (error) {
    console.log('Error de Conexion');
}

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(8000, () => {
    console.log('Server Up Running in http://localhost:8000');
});