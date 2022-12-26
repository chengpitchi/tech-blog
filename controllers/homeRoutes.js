const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

router.get('/', async (req, res) => {  
  try {
    // get post items
    const postData = await Post.findAll({ 
      include: [{ model: User }],
    }); 

    const posts = postData.map((item) => item.get({ plain: true })); 
    // render home page
    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
      user_name: req.session.user_name,
      page_title: "The Tech Blog", 
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard/:id', async (req, res) => {  
  try {
    // get user's own post items 
    const postData = await Post.findAll({ 
      where: { user_id: req.params.id }, 
      order: [['updated_at', 'DESC']], 
    }); 

    const posts = postData.map((item) => item.get({ plain: true })); 

    // render dashboard
    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
      user_name: req.session.user_name,
      page_title: "My Dashboard", 
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/editpost/:id', async (req, res) => {  
  try {
    // get post item for editing 
    const postData = await Post.findByPk(req.params.id); 

    const post = postData.get({ plain: true }); 
    
    // render edit post page
    res.render('editpost', {
      post, 
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
      user_name: req.session.user_name,
      page_title: "My Dashboard", 
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', {page_title: "The Tech Blog"});
});

router.get('/create', async (req, res) => {  
  try {
    // render create post page
    res.render('newpost', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
      user_name: req.session.user_name,
      page_title: "My Dashboard", 
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
