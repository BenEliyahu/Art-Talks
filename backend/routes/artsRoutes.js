const { Router } = require('express');
const {
  getAllArts,
  getArts,
  getArtsByTitle,
} = require('../controllers/artsControllers');

const router = Router();

router.get('/allArts', getAllArts);
router.get('/arts', getArts);
router.get('/arts/:title?', getArtsByTitle);

module.exports = router;
