var express = require('express');
var router = express.Router();

let Events = require('../controllers/event')
/* GET users listing. */

router.post('/', Events.create);
router.get('/', Events.read);
router.put('/:id', Events.update);
router.delete('/:id', Events.deleteEvent)

module.exports = router;
