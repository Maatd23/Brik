module.exports = (err, req, res, next) => {
  let message = `Internal Server Error`;
  let status = 500;
  console.log(err)
  switch (err.name) {
    
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      message = err.errors[0].message;
      status = 400;
      break;
    case "NotFound":
      message = "Data not found";
      status = 404;
      break;
    case "wrong":
      message = `Email/Password is wrong`;
      status = 401;
      break;
    case "email_required":
      message = `email is required`;
      status = 400;
      break;
    case "password_required":
      message = `password is required`;
      status = 400;
      break;
    case `InvalidToken`:
    case "JsonWebTokenError":
      message = `Invalid Token`;
      status = 401;
      break;
    case "Forbiden":
      message = "You are not authorization";
      status = 403;
      break;
    default:
      break;
  }

  res.status(status).json({ message: message });
};
