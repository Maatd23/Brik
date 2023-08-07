const { User, Transaction } = require("../models");
const { decodeToken } = require("../helper/token");

async function authentication(req, res, next) {
  let access_token = req.headers.access_token;
  try {
    if (!access_token) throw { name: `InvalidToken` };
    let payload = decodeToken(access_token);
    let user = await User.findByPk(payload.id);
    if (!user) throw { name: `InvalidToken` };
    req.user = {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    };
    next();
  } catch (err) {
    next(err);
  }
}

async function authorization(req, res, next) {
  try {
    let { id, role } = req.user;
    let transaction = await Transaction.findByPk(req.params.id);
    if(!transaction) throw {name: 'NotFound'}
    if (id !== transaction.UserId) throw { name: "Forbiden" };
    next();
  } catch (err) {
    next(err);
  }
}

// async function authorizationStatus(req, res, next) {
//   try {
//     let { id, role } = req.user;
//     let product = await Product.findByPk(req.params.id);
//     if (!product) throw { name: `NotFound` };
//     if (role !== "Admin") throw { name: "Forbiden" }
//     next();
//   } catch (err) {
//     next(err);
//   }
// }

module.exports = { authentication, authorization };
