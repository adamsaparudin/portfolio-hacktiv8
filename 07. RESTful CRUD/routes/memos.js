let express = require('express');
let router = express.Router();

let Memo = require('../controllers/memo')

/* /memo page. */
router.get('/', (req, res, next) => {
  res.render('memos')
});

module.exports = router;
