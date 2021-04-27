const sequelize = require('../config/connection');
const seedBlog = require('./Blog');
const seedUsers = require('./Users');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();

  await seedUsers();

  process.exit(0);
};

seedAll();
