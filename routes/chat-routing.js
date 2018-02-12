var express = require('express');
var router = express.Router();


// show chat
router.route('/chat/:roomId')
.get((req,res) => {
  res.render('chat.hbs', {
    type: req.params.type,
    roomId: req.params.roomId
  })
})

module.exports = router;