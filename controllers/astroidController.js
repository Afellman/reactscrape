const db = require('../models')

module.exports = {
  findAll: (req, res) => {
    db.Astroid.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  saveOne: (req, res) => {
    db.Astroid.create(req.body)
      .then(dbModel => req.json(dbModel))
      .catch(err => {
        console.log('foo')
        res.status(422).json(err)
      })
  },
  delete: (req, res) => {
    console.log('delete')
    console.log(req.body.name)
    db.Astroid.findOne({name: req.body.name})
      .then(dbModel => dbModel.remove())
      .then(dbMoodel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}