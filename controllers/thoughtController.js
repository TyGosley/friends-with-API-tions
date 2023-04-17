const { User, Thought } = require("../models");

// /api/users
const thoughtController = {
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
        { _id: req.params.id },
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

updateThought(req, res) {
    Thought.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body },
    { runValidators: true, new: true }
    )
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.status(400).json(err));
    },

deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.id })
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.status(400).json(err));
    },

addReaction(req, res) {
    Thought.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { reactions: req.body } },
    { runValidators: true, new: true }
    )
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.status(400).json(err));
    },

deleteReaction(req, res) {
    Thought.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { reactions: { reactionId: req.params.reactionId } } },
    { runValidators: true, new: true }
    )
    .then((dbThoughtData) => {
        if (!dbThoughtData) {
        res.status(404).json({ message: "No thought found with this id!" });
        return;
        }
        res.json(dbThoughtData);
    })
    .catch((err) => res.status(400).json(err));
    },
};


module.exports = thoughtController;

        
