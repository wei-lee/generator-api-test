const Router = require('express').Router;
const router = new Router();

const user  = require('./model/user/user-router');


router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to api-test API!' });
});

router.use('/user', user);


module.exports = router;
