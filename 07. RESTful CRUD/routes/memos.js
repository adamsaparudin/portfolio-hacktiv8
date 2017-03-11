let express = require('express');
let router = express.Router();

let Memo = require('../controllers/memo')

/* /memo page. */
router.post('/', Memo.create);
router.get('/', Memo.read);
router.put('/:id', Memo.update);
router.post('/:id', Memo.deleteMemo);


module.exports = router;
