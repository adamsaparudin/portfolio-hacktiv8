let express = require('express');
let router = express.Router();

let Memo = require('../controllers/memo')

router.post('/memos', Memo.create);
router.get('/memos', Memo.read);
router.put('/memos/:id', Memo.update);
router.delete('/memos/:id', Memo.deleteMemo);

module.exports = router
