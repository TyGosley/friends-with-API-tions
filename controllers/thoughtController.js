const { User, Thought } = require("../../models");

// /api/users
getThought(req, res) {
    Thought.find({})
    .select("-__v")
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
    },

// /api/users/:id
getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
    .select("-__v")
    .then((dbThoughtData) => res.json(dbThoughtData))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
    },

createThought(req, res) {
    Thought.create(req.body)
    .then(({ _id }) => {
        return User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { thoughts: _id } },
        { new: true }
        );
    })
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
        res.status(404).json({ message: "No user found with this id!" });
        return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.json(err)); 
    },
        
