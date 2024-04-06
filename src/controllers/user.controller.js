const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const db = require("../database/models");
// Añadir encriptación

const User = db.User;

const UserController = {
  // Login view
  async showLogin(req, res) {
    res.render("users/login.ejs");
  },
  // Register view
  async showRegister(req, res) {
    res.render("users/register.ejs");
  },
  // Login process
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.scope("withPassword").findOne({
        where: { email },
      });
      if (!user) throw new Error("Credenciales inválidas");
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) throw new Error("Credenciales inválidas");
      req.session.userId = user.id;
      req.session.username = user.fullname;
      res.json({ success: true });
    } catch (error) {
      res.status(400).send({
        errors: [{ msg: error.message }],
      });
    }
  },
  // Register process
  async register(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { birthdate, fullname, email, password } = req.body;
    try {
      const existingUser = await db.User.findOne({ where: { email } });
      if (existingUser)
        throw new Error("El correo electrónico ya está registrado");
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.User.create({
        birthdate,
        email,
        fullname,
        password: hashedPassword,
      });
      req.session.userId = newUser.id;
      req.session.username = newUser.fullname;
      res.send({
        success: "Usuario creado con éxito",
      });
    } catch (error) {
      res.send({
        errors: [{ msg: error.message }],
      });
    }
  },
  async logout(req, res) {
    req.session.destroy((error) => {
      if (error) {
        console.error("Error al cerrar sesión:", error);
        res.json({
          errors: [{ msg: "Error en el servidor, intente más tarde." }],
        });
      } else {
        res.redirect("/users/login");
      }
    });
  },

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        where: { deletedAt: null },
        attributes: { exclude: ["deletedAt"] },
      });
      res.json(users);
    } catch (error) {
      console.error("Error getting users:", error);
      res.json({ error: "Internal server error" });
    }
  },

  // Get a single user by ID
  async getUserById(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.json({ error: "User not found" });
      }
      res.json(user);
    } catch (error) {
      console.error("Error getting user by ID:", error);
      res.json({ error: "Internal server error" });
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const userId = req.params.id;
      const { email, password } = req.body;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.json({ error: "User not found" });
      }
      await user.update({ email, password });
      res.json(user);
    } catch (error) {
      console.error("Error updating user:", error);
      res.json({ error: "Internal server error" });
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      await user.destroy();
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.json({ error: "Internal server error" });
    }
  },

  profile(req, res) {
    try {
      const user = User.findByPk(req.session.userId);
      res.send({ success: user });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = UserController;
