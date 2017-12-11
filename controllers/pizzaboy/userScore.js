const UserScore = require('../../models/pizzaboy/userScore')

const getUserScores = (req, res) => {
  UserScore.find({}).sort({score: -1}).exec((err, userScores) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    res.status(200).send({userScores});
  })
}

const getUserScore = (req, res) => {
  let userCode = req.params.user;
  UserScore.findOne({code: userCode}, (err, userScore) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    res.status(200).send({userScore});
  })
}

const createUserScore = (req, res) => {
  let userScore = new UserScore();

  userScore.code = req.body.code;
  userScore.name = req.body.name;
  userScore.score = req.body.score;

  userScore.save((err, createdUserScore) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}`});

    res.status(200).send({createdUserScore});
  })
}

const updateUserScore = (req, res) => {
  let id = req.params.id;
  let newUserScore = req.body

  UserScore.findByIdAndUpdate(id, newUserScore, (err, userScore) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!userScore)
      return res.status(404).send({message: `That userScore does not exist.`});

    res.status(200).send({userScore});
  })
}

const deleteUserScore = (req, res) => {
  let id = req.params.id;

  UserScore.findById(id, (err, userScore) => {
    if (err)
      return res.status(500).send({errorMessage: `Server error: ${err}.`});

    if (!userScore)
      return res.status(404).send({message: `That userScore does not exist.`});

    userScore.remove(err => {
      if (err)
        return res.status(500).send({errorMessage: `Server error: ${err}.`});

      res.status(200).send({message: `UserScore deleted.`})
    })
  })
}

module.exports = {
  getUserScores,
  getUserScore,
  createUserScore,
  updateUserScore,
  deleteUserScore
}
