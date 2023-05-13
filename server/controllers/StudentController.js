const { Student } = require('../models');

class StudentController {
  static async getAllStudents(req, res) {
    //
    try {
      let students = await Student.findAll();

      res.status(200).json(students);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async register(req, res) {
    //
    try {
      const { email, password } = req.body;
      let result = await Student.create({
        email,
        password,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async login(req, res) {
    //
    try {
      const { email, password } = req.body;

      let studentFound = await Student.findOne({
        where: { email },
      });
      // console.log(StudentFound);
      if (studentFound) {
        if (studentFound.password === password) {
          res.status(200).json(studentFound);
        } else {
          res.status(400).json({
            message: 'Invalid password',
          });
        }
      } else {
        res.status(404).json({
          message: 'Student not found',
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async getStudentById(req, res) {
    //
    try {
      const id = +req.params.studentId;
      let result = await Student.findByPk(id);

      if (result) res.status(200).json(result);
      else res.status(404).json({ message: 'Student not found' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    //
    try {
      const id = +req.params.studentId;

      let result = await Student.destroy({
        where: { id },
      });

      result ? res.status(200).json({ message: 'Student deleted.' }) : res.status(400).json({ message: 'Student not delete' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    //
    try {
      const { username, email, password, image, role } = req.body;
      const id = +req.params.studentId;

      let result = await Student.update(
        {
          username,
          email,
          password,
          image,
          role,
        },
        {
          where: { id },
        }
      );

      result[0] === 1 ? res.status(200).json({ message: 'Student updated' }) : res.status(400).json({ message: 'Student not updated' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = StudentController;
