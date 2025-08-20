const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);         // /api/events
router.get('/:id', eventController.getEventById);      // /api/events/:id
router.post('/', eventController.createEvent);         // /api/events (new)

module.exports = router;