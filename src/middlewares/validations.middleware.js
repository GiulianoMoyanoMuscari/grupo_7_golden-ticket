const { body } = require("express-validator");
const dayjs = require("dayjs");

// Middleware para validar el formulario de registro
const userCreation = [
  body("fullname")
    .notEmpty()
    .withMessage("El nombre de usuario es requerido")
    .isLength({ min: 3 })
    .withMessage("El nombre de usuario debe tener al menos 3 caracteres"),
  body("email")
    .isEmail()
    .withMessage("Debe ingresar un correo electrónico válido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres"),
  body("birthdate")
    .notEmpty()
    .withMessage("La fecha de nacimiento es requerida")
    .matches(/^\d{4}-\d{2}-\d{2}$/)
    .withMessage("El formato de la fecha debe ser YYYY-MM-DD")
    .custom((value, { req }) => {
      const birthdate = dayjs(value, "YYYY-MM-DD");
      if (!birthdate.isBefore(dayjs(), "day")) {
        throw new Error("La fecha de nacimiento debe ser una fecha pasada");
      }
      const today = dayjs();
      const age = today.diff(birthdate, "years");
      if (age < 14) {
        throw new Error("Debe tener al menos 14 años para registrarse");
      }
      return true;
    }),
  body("confirm")
    .equals("on")
    .withMessage("Debes aceptar los términos y condiciones para registrarte"),
];

module.exports = {
  userCreation,
};
