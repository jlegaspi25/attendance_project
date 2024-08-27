const mongoose = require('mongoose');


const attendanceRecordSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['present', 'absent'],
        required: true,
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
        deffault: [],
    }
});

const StudentRecord = mongoose.model('StudentRecord', studentRecordSchema);

module.export = SgtudentRecord;