const { Router } = require('express');
const route = Router();

route.get('/', (req, res) => {
  res.status(200).json({
    message: 'Academic System Apps',
  });
});

const studentRoutes = require('./student');
const academicRoutes = require('./academic');

route.use('/students', studentRoutes);
route.use('/academics', academicRoutes);

module.exports = route;
