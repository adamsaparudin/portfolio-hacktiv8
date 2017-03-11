var express = require('express');
var router = express.Router();

let Skill = require('../controllers/skill')

/* GET home page. */
router.post('/', Skill.create);
router.get('/', Skill.read);
router.put('/:id', Skill.update);
router.delete('/:id', Skill.deleteSkill)

module.exports = router;
