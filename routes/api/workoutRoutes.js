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
});

// createWorkout
router.post('/', ({body}, res) => {
    db.Workout.create(body)
    // .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
    // What does this do?? Associate with another model?
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// getWorkoutsInRange
router.get('/range', (req, res) => {
});
  
module.exports = router;