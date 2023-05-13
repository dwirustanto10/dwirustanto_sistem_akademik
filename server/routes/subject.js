const { Router } = require('express');
const subjectRoute = Router();
const SubjectController = require('../controllers/SubjectController');

subjectRoute.get('/', SubjectController.getAllSubjects);
subjectRoute.post('/create', SubjectController.create);
subjectRoute.get('/description/:subjectId', SubjectController.getSubjectById);
subjectRoute.put('/update/:subjectId', SubjectController.update);
subjectRoute.delete('/delete/:subjectId', SubjectController.delete);

module.exports = subjectRoute;
