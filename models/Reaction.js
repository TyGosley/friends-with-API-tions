const { Schema, model, Types } = require('mongoose');
const dayjs = require('dayjs'); // import dayjs library
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
            default: dayjs().format('MMM DD, YYYY [at] hh:mm a')
        }
    });

    module.exports = ReactionSchema;