import StudentModel from '../models/StudentModel.js'   

// Mostrar todos los estudiantes
export const getAllStudents = async (req, res) => {
    try{
        const students = await StudentModel.findAll();
        res.json(students);
    } catch (error){
        res.json({ message: error.message });
    }
};

// Mostrar un estudiantes
export const getStudent = async(req, res) => {
    try{
        const student = await StudentModel.findAll({
            where: {id: req.params.id},
        });
        res.json(student[0]);
    } catch(error){
        res.json({ message: error.message });
    }
};

// Agregar un estudiantes
export const createStudent = async (req, res) => {
    try{
        await StudentModel.create(req.body);
        res.json({ message: "Registro de alumno almacenado con exito" });
    } catch(error){
        res.json({ message: error.message });
    }
};

// Actualizar un estudiantes
export const updateStudent = async (req, res) => {
    try{
        await StudentModel.update(req.body, {
            where: {id: req.params.id},
        });
        res.json({ message: "Alumno actualizado con exito" });
    } catch(error){
        res.json({ message: error.message });
    }
};

// Eliminar un estudiante
export const deleteStudent = async (req, res) => {
    try {
        await StudentModel.destroy({
            where: {id: req.params.id},
        });
        res.json({ message: "Alumno eliminado con exito" });
    } catch(error){
        res.json({ message: error.message });
    }
};