const { Schema, model, Types } = require('mongoose');
const ReactionSchema = require('./Reaction');
// const dayjs = require('dayjs'); 
const moment = require('moment');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: moment().format('L'),
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionSchema] // use ReactionSchema to validate data for a reply
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    });

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;