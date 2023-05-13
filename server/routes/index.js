const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
  res.status(200).json({
    message: 'Academic System Apps',
  });
});

const userRoutes = require('./user');
const subjectRoutes = require('./subject');

route.use('/users', userRoutes);
route.use('/subjects', subjectRoutes);

module.exports = route;
