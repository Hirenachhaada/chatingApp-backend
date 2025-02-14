// config/websocket.js
module.exports = ({ strapi }) => {
  // Initialize socket.io
  const io = require("socket.io")(strapi.server.httpServer, {
    path: "/socket.io",
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("message", (data) => {
      console.log("Received message:", data);
      // Echo back the same message
      socket.emit("response", data);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};
