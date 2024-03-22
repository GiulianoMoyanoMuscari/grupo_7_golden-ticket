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
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error("Credenciales inválidas");
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) throw new Error("Credenciales inválidas");
      req.session.userId = user.id;
      console.log("Loggueando: ", user);
      req.session.username = user.fullname;
      res.redirect("/");
    } catch (error) {
      if (error.message === "Credenciales inválidas") {
        res.render("users/login", {
          errors: [{ msg: error.message }],
        });
      } else {
        console.error("Error de inicio de sesión:", error);
        res.render("users/login", {
          errors: [{ msg: "Error en el servidor, intente más tarde" }],
        });
      }
    }
  },
  // Register process
  async register(req, res) {
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
      res.redirect("/");
    } catch (error) {
      res.render("users/register", {
        errors: [{ msg: error.message }],
      });
    }
  },
  async logout(req, res) {
    req.session.destroy((error) => {
      if (error) {
        console.error("Error al cerrar sesión:", error);
        res.send("Error interno del servidor");
      } else {
        res.redirect("/users/login");
      }
    });
  },
  // Create a new user
  async createUser(req, res) {
    try {
      const { email, password } = req.body;
      const newUser = await User.create({ email, password });
      res.json(newUser);
    } catch (error) {
      console.error("Error creating user:", error);
      res.redirect("/register", {
        errors: [{ msg: "Error en el servidor, intente más tarde" }],
      });
    }
  },

  // Get all users
  async getUsers(req, res) {
    try {
      const users = await User.findAll();
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
};

module.exports = UserController;
