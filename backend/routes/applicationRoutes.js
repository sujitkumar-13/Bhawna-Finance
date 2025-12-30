const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

router.post('/', applicationController.submitApplication);
router.post('/track', applicationController.trackApplication);
router.get('/', applicationController.getAllApplications);
router.get('/stats', applicationController.getApplicationStats);
router.get('/:id', applicationController.getApplicationById);
router.put('/:id/status', applicationController.updateApplicationStatus);
router.post('/:id/notes', applicationController.addNote);
router.delete('/:id/notes/:noteId', applicationController.deleteNote);
router.post('/:id/documents', applicationController.addDocument);
router.delete('/:id/documents/:docId', applicationController.deleteDocument);

module.exports = router;
