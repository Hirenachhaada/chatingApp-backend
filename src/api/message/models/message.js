module.exports = {
  attributes: {
    text: { type: "string", required: true },
    user: {
      type: "relation",
      relation: "manyToOne",
      target: "plugin::users-permissions.user",
      inversedBy: "messages",
    },
  },
};
