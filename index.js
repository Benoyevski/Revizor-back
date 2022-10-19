require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const fileUpload = require("express-fileupload");
const http = require("http");
const { Server } = require("socket.io");
const port = process.env.SERVER_PORT
app.use(fileUpload({}));
app.use(cors());
app.use(express.json());
const morgan = require("morgan")
app.use(morgan("dev"))

app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.resolve(__dirname, "public")));

//здесь будут роуты
app.use(require("./routes/diners.route"));
app.use(require("./routes/comments.route"));
app.use(require("./routes/users.route"));
app.use(require("./routes/msg.route"));
mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("mongoose connect"))
  .catch(() => console.log("warning"));

// app.listen(process.env.SERVER_PORT, () => {
//   console.log(`Server: ${process.env.SERVER_PORT} had been started`);
// });

//chat
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Сервер запущен на порте ${port}`);
});
