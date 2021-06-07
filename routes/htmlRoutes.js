const path = require('path');
const router = require('express').Router();

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

// If no matching route is found default to home
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;