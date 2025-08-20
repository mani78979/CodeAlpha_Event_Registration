const express = require('express');
const router = express.Router();
const registrationController = require('../controllers/registrationController');

router.post('/', registrationController.registerForEvent);  // /api/registrations
router.get('/:userId', registrationController.getUserRegistrations);  // /api/registrations/:userId
router.delete('/:id', registrationController.cancelRegistration);  // /api/registrations/:id

module.exports = router;