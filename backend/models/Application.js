const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
    loanType: { type: String, required: true },
    loanAmount: { type: Number, required: true },
    tenure: { type: Number, required: true },
    purpose: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    pan: { type: String, required: true },
    aadhar: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    pinCode: { type: String, required: true },
    employmentType: { type: String, required: true },
    companyName: { type: String },
    designation: { type: String },
    experience: { type: String },
    income: { type: Number, required: true },
    existingEmi: { type: Number, default: 0 },
    bankName: { type: String, required: true },
    accountNumber: { type: String, required: true },
    ifsc: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Pending', 'Under Review', 'Document Pending', 'Approved', 'Rejected', 'Disbursed'],
        default: 'Under Review' 
    },
    assignedTo: { type: String, default: 'Unassigned' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', applicationSchema);
