


var routes = (server, authenticate) => {
  server.post('/todos', authenticate, (req, res) => {
    var todo = new Todo({
      text: req.body.text,
      _creator: req.user._id
    });

    todo.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
  });

  server.get('/todos', authenticate, (req, res) => {
    Todo.find({
      _creator: req.user._id
    }).then((todos) => {
      res.send({todos});
    }, (e) => {
      res.status(400).send(e);
    });
  });

  server.get('/todos/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findOne({
      _id: id,
      _creator: req.user._id
    }).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  });

  server.delete('/todos/:id', authenticate, (req, res) => {
    var id = req.params.id;

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    Todo.findOneAndRemove({
      _id: id,
      _creator: req.user._id
    }).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  });

  server.patch('/todos/:id', authenticate, (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
      return res.status(404).send();
    }

    if (_.isBoolean(body.completed) && body.completed) {
      body.completedAt = new Date().getTime();
    } else {
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findOneAndUpdate({_id: id, _creator: req.user._id}, {$set: body}, {new: true}).then((todo) => {
      if (!todo) {
        return res.status(404).send();
      }

      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    })
  });
};
