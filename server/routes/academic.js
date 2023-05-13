const { Router } = require('express');
const academicRoute = Router();
const AcademicController = require('../controllers/AcademicController');

academicRoute.get('/', AcademicController.getAllAcademics);
academicRoute.post('/create', AcademicController.create);
academicRoute.get('/description/:academicId', AcademicController.getacademicById);
academicRoute.put('/update/:academicId', AcademicController.update);
academicRoute.delete('/delete/:academicId', AcademicController.delete);

module.exports = academicRoute;
