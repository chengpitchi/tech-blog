const router = require('express').Router();
const sequelize = require('../../config/connection'); 
const { Post, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth'); 

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

// add a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', withAuth, async (req, res) => {
  // update a post by its `id` value
  try {
      const postData = await Post.update(req.body, {
      where: {
          id: req.params.id,
      },
      });

      if (!postData) {
      res.status(404).json({ message: 'No post found with that id!' });
      return;
      }

      res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});
  
router.delete('/:id', withAuth, async (req, res) => {
  // delete a post by its `id` value
  try {
      const postData = await Post.destroy({
      where: {
          id: req.params.id,
      },
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with that id!' });
        return;
      }
  
      res.status(200).json(postData);
  } catch (err) {
      res.status(500).json(err);
  }
});
  
module.exports = router;
