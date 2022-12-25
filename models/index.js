// import models
const Post = require('./Post');
const Comment = require('./Comment'); 
const User = require('./User'); 

// Describe relationship between comment and post
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
}); 
  
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
}); 

// Describe relationship between post and user
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
}); 
  
Post.belongsTo(User, {
  foreignKey: 'user_id',
}); 

// Describe relationship between comment and user
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
}); 
  
Comment.belongsTo(User, {
  foreignKey: 'user_id',
}); 

module.exports = {
  Post,
  Comment, 
  User, 
};
