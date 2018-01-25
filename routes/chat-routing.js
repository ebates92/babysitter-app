var express = require('express');
var router = express.Router();


// show chat
router.route('/chat')
.get((req,res) => {
  res.render('chat.hbs', {
    type: req.params.type
  })
})

module.exports = router;