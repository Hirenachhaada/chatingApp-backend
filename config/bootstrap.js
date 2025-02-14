// config/functions/bootstrap.js
module.exports = () => {
  process.nextTick(() => {
    require("./websocket")({ strapi });
  });
};
