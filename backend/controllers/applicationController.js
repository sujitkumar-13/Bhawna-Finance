const Application = require('../models/Application');

// Submit a new application
exports.submitApplication = async (req, res) => {
    try {
        const newApplication = new Application(req.body);
        const savedApplication = await newApplication.save();
        res.status(201).json({
            success: true,
            message: 'Application submitted successfully',
            data: savedApplication
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error submitting application',
            error: error.message
        });
    }
};

// Get all applications (Admin)
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            data: applications
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching applications',
            error: error.message
        });
    }
};

// Get application stats (Admin Dashboard)
exports.getApplicationStats = async (req, res) => {
    try {
        const stats = await Application.aggregate([
            {
                $group: {
                    _id: null,
                    totalApplications: { $sum: 1 },
                    totalAmount: { $sum: '$loanAmount' },
                    approvedCount: {
                        $sum: { $cond: [{ $eq: ['$status', 'Approved'] }, 1, 0] }
                    },
                    pendingCount: {
                        $sum: { $cond: [{ $eq: ['$status', 'Under Review'] }, 1, 0] }
                    }
                }
            }
        ]);

        const recentApplications = await Application.find()
            .sort({ createdAt: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            data: {
                summary: stats[0] || { totalApplications: 0, totalAmount: 0, approvedCount: 0, pendingCount: 0 },
                recentApplications
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching stats',
            error: error.message
        });
    }
};

// Update application status
exports.updateApplicationStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updatedApplication = await Application.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );

        if (!updatedApplication) {
            return res.status(404).json({
                success: false,
                message: 'Application not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Status updated successfully',
            data: updatedApplication
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating status',
            error: error.message
        });
    }
};

// Get single application detail
exports.getApplicationById = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        if (!application) {
            return res.status(404).json({
                success: false,
                message: 'Application not found'
            });
        }
        res.status(200).json({
            success: true,
            data: application
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error fetching application details',
            error: error.message
        });
    }
};
