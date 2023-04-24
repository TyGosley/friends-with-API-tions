const { Schema, model, Types } = require('mongoose');
// const dayjs = require('dayjs'); // import dayjs library
const moment = require('moment'); // import moment library
const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: moment().format('L')
        }
    });

    module.exports = ReactionSchema;