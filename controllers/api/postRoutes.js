const router = require('express').Router();
const sequelize = require('../../config/connection'); 
const { Post, Comment, User } = require('../../models');

// get post by id, include Comment and User 
router.get('/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment, include: [ { model: User }] }], 
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
    }

    const post = postData.get({ plain: true });
     
    res.render('postitem', {
      post, 
      logged_in: req.session.logged_in,
      user_id: req.session.user_id, 
      user_name: req.session.user_name, 
    });
} catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
