// require Mongoose and Moment
const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

// create reactionSchema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) =>
                moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);
// create thoughtSchema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minLength: 1,
            maxLength: 280,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) =>
                moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
        },
        username: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// get total count of reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

// create the Thoughts model using the Thoughts Schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;