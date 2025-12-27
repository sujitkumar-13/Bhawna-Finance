const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/', applicationController.submitApplication);
router.get('/', applicationController.getAllApplications);
router.get('/stats', applicationController.getApplicationStats);
router.get('/:id', applicationController.getApplicationById);
router.put('/:id/status', applicationController.updateApplicationStatus);
router.post('/:id/notes', applicationController.addNote);

module.exports = router;
