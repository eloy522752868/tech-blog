//association of  models and relationship 
//User has many Blog post
//Blog to a user
const User = require('./User');
const Blog = require('./Blog');

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {User,Blog};
