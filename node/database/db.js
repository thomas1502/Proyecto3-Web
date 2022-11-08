import { Sequelize } from "sequelize";

/* Cadena de conexion con la BD */
const db = new Sequelize('students', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db