const getProfile = async (req, res) => {
  const username = req.params.username;

  res.json({
    username,
    solved: 320,
    ranking: 12345,
    easy: 120,
    medium: 160,
    hard: 40,
  });
};

module.exports = {
  getProfile,
};