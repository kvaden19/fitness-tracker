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
    // db.Book.create(body)
    // .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
    // .then(dbLibrary => {
    //     res.json(dbLibrary);
    // })
    // .catch(err => {
    //     res.json(err);
    // });
});

// getWorkoutsInRange
router.get('/range', (req, res) => {
});
  
module.exports = router;