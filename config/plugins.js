// config/plugins.js
module.exports = {
  io: {
    enabled: true,
    config: {
      IOServerOptions: {
        cors: {
          origin: "*",
          methods: ["GET", "POST"],
          allowedHeaders: ["my-custom-header"],
          credentials: true,
        },
      },
    },
  },
};
