const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Present', 'Absent']
    }
});

const studentRecordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    attendance: {
        type: [attendanceSchema],
        default: [],
    }
});

const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);
module.exports = StudentRecord;