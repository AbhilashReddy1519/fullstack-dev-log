const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    isComplete: {type: Boolean, default: false},
    // owner: {type: Schema.Types.ObjectId, require: true, ref: "user"},
    },
    {
        timestamps: true
    }
)

const TaskModel = new model("Task", TaskSchema);

module.exports = TaskModel;