import db from "../database/db.js";

import { DataTypes } from "sequelize";

const StudentModel = db.define('assistance', {
    Name:{type: DataTypes.STRING},
    check_time:{type: DataTypes.STRING},
    departure_time:{type: DataTypes.STRING},
    Day:{type: DataTypes.STRING},
});

export default StudentModel;