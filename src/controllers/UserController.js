/* eslint-disable class-methods-use-this */
import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      const errors = e.errors.map((err) => err.message);
      return res.status(400).json({ errors });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID nao enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe.'],
        });
      }
      const novosDados = await user.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      const errors = e.errors.map((err) => err.message);
      return res.status(400).json({ errors });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID nao enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario nao existe.'],
        });
      }
      await user.destroy();
      return res.json(user);
    } catch (e) {
      const errors = e.errors.map((err) => err.message);
      return res.status(400).json({ errors });
    }
  }

  // eof
}
export default new UserController();
