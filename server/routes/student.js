const { Router } = require('express');
const studentRoute = Router();
const StudentController = require('../controllers/StudentController');

studentRoute.get('/', StudentController.getAllStudents);
studentRoute.post('/login', StudentController.login);
studentRoute.post('/register', StudentController.register);
studentRoute.get('/account/:studentId', StudentController.getStudentById);
studentRoute.put('/update/:studentId', StudentController.update);
studentRoute.delete('/delete/:studentId', StudentController.delete);

module.exports = studentRoute;
