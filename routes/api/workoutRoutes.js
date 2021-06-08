const router = require('express').Router();
const db = require('../../models');

// getLastWorkout
router.get('/', (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// addExercise
router.put('/:id', (req, res) => {
    let query = { _id: req.params.id };
    db.Workout.findOneAndUpdate(query, { $push: {"exercises": req.body}} )
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

// createWorkout
router.post('/', ({body}, res) => {
    db.Workout.create({ day: new Date(), exercises: [body] })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// getWorkoutsInRange
router.get('/range', (req, res) => {
    let today = new Date();
    let sevenDaysAgo = new Date().setDate(new Date().getDate()-8);
    db.Workout.aggregate([{
        $addFields: { totalDuration: { $sum: "exercises.duration" }}
    }]);
    db.Workout.find({ day: { $gte: sevenDaysAgo, $lte: today } })
    .then(dbWorkout => {
        res.json(dbWorkout);
        // for (let workout of dbWorkout) {  
        //   console.log(workout.exercises);
        // }
    })
    .catch(err => {
        res.json(err);
    });
});
  
module.exports = router;