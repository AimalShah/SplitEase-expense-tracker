"use strict";

const { v4: uuidv4 } = require("uuid");

const PASSWORD_HASH =
  "$2b$10$79G9g0iJfI0y1LhuSrWKb..LDn8hAZO6QSCevdYAQVTP.XOpF5/Aq"; // password123

const users = [
  {
    user_id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    name: "Alice Johnson",
    email: "alice@example.com",
    password_hash: PASSWORD_HASH,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
    name: "Bob Smith",
    email: "bob@example.com",
    password_hash: PASSWORD_HASH,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    user_id: "c3d4e5f6-a7b8-9012-cdef-123456789012",
    name: "Charlie Davis",
    email: "charlie@example.com",
    password_hash: PASSWORD_HASH,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
