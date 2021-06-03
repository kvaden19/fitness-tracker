const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    // day - Date object

    // exercises - Array of objects
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;