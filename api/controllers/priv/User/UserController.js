import { Op } from 'sequelize';
import _ from 'lodash';

const User = require('../../../models/shared/User/User');

const AuthController = () => {
  const list = (req, res) => {
    User
      .findAll()
      .then((users) => res.status(200).json(users))
      .catch((err) => {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      });
  };

  const updateUser = (req, res) => {
    const userId = req.params.id;
    const user = req.body;

    if (userId) {
      User.findById(userId).then(foundUser => {
        if (foundUser) {
          foundUser.update(user).then(() => (
            res.status(200).send({ user })
          ));
        } else {
          return res.status(404).send({ message: 'That user does not exist.' });
        }
      })
        .catch(err => {
          return res.status(500).send({ message: `Server error: ${err}.` });
        });
    } else {
      return res.status(500).json({ message: 'Must provide a numeric user id.' });
    }
  };

  const deleteUser = (req, res) => {
    const userId = req.params.id;
    if (userId) {
      User.findById(userId).then(user => {
        if (user) {
          user.destroy().then(() => {
            return res.status(200).send({ id: userId });
          });
        } else {
          return res.status(404).send({ message: 'That user does not exist.' });
        }
      })
      .catch(err => {
        return res.status(500).send({ message: `Server error: ${err}.` });
      });
    } else {
      return res.status(500).json({ message: 'Must provide a numeric user id.' });
    }
  };

  return {
    list,
    updateUser,
    deleteUser,
  };
};

module.exports = AuthController;
