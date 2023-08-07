// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config();
// }

const express = require("express");
const cors = require("cors");
const router = require("./routers");
const errHandling = require("./middleware/errHandling");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(router);
app.use(errHandling);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
