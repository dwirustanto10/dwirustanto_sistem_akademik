const { subject, User } = require('../models');

class SubjectController {
  static async getAllSubjects(req, res) {
    //
    try {
      let Subjects = await Subject.findAll({
        include: [User],
      });

      res.status(200).json(Subjects);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    //
    try {
      const { semester, ipk, sks, status, image, UserId } = req.body;
      let result = await Subject.create({
        semester,
        ipk,
        sks,
        status,
        image,
        UserId,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getSubjectById(req, res) {
    //
    try {
      const id = +req.params.subjectId;
      let result = await Subject.findByPk(id);

      if (result) res.status(200).json(result);
      else res.status(404).json({ message: 'Subject not found' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    //
    try {
      const id = +req.params.subjectId;

      let result = await Subject.destroy({
        where: { id },
      });

      result ? res.status(200).json({ message: 'MK deleted.' }) : res.status(400).json({ message: 'MK not delete' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async update(req, res) {
    //
    try {
      const { semester, ipk, sks, status, image, UserId } = req.body;
      const id = +req.params.subjectId;

      let result = await Subject.update(
        {
          semester,
          ipk,
          sks,
          status,
          image,
          UserId,
        },
        {
          where: { id },
        }
      );

      result[0] === 1 ? res.status(200).json({ message: 'Subject updated' }) : res.status(400).json({ message: 'Subject not updated' });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = SubjectController;
