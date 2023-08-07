const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const secret = "majaair";

const hashPassword = (password) => {
  return bcrypt.hashSync(password);
};

const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
};

const encodeToken = (payload) => {
  return jwt.sign(payload, secret);
};
const decodeToken = (token) => {
  return jwt.verify(token, secret);
};
module.exports = { hashPassword, comparePassword, encodeToken, decodeToken };
