const Registration = require('../models/Registration');

exports.registerForEvent = async (req, res) => {
  const { eventId, userName, email } = req.body;
  try {
    const registration = new Registration({ eventId, userName, email });
    const savedRegistration = await registration.save();
    res.status(201).json(savedRegistration);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({ userId: req.params.userId }).populate('eventId');
    res.json(registrations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.cancelRegistration = async (req, res) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    if (registration) {
      res.json({ message: 'Registration cancelled successfully' });
    } else {
      res.status(404).json({ message: 'Registration not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};