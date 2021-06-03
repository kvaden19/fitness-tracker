const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// TODO: Could add some validations, defaults, etc
const WorkoutSchema = new Schema({
    day: Date,

    exercises: Array
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;