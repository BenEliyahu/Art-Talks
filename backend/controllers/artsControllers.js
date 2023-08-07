const artsData = require('../db.json');

const getAllArts = (req, res) => {
  res.json(artsData.arts);
};

const getArts = (req, res) => {
  const { search } = req.query;

  if (!search || search.trim() === '') {
    return res.json(artsData.arts);
  }

  const filteredArts = artsData.arts.filter(
    (art) =>
      art.title.toLowerCase().includes(search.toLowerCase()) ||
      art.artist.toLowerCase().includes(search.toLowerCase()),
  );
  return res.json(filteredArts);
};

const getArtsByTitle = (req, res) => {
  const { title } = req.params;

  if (!title) {
    return res.json(artsData.arts);
  }

  const filteredArts = artsData.arts.filter((art) =>
    art.title.toLowerCase().includes(title.toLowerCase()),
  )
  return res.json(filteredArts);
};

module.exports = {
  getAllArts,
  getArts,
  getArtsByTitle,
};
