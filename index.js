require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fileUpload = require('express-fileupload')

app.use(fileUpload({}))
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.resolve(__dirname, "public")));

//здесь будут роуты
app.use(require("./routes/diners.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/users.route"));

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("warning"));

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server: ${process.env.SERVER_PORT} had been started`);
});
