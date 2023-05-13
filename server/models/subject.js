'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subject.belongsTo(models.User);
    }
  }
  Subject.init(
    {
      semester: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'Name cannot be null',
          },
        },
      },
      ipk: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'Category cannot be null',
          },
        },
      },
      sks: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'sks cannot be null',
          },
          isNumeric: {
            message: 'sks must be a number.',
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'dosen cannot be null',
          },
          isNumeric: {
            message: 'Stock must be a number.',
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: 'Image cannot be null',
          },
        },
      },
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Subject',
    }
  );
  return Subject;
};
