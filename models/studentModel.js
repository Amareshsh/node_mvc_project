const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required:[true, "Please enter a student name"]
        },
        roll: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamp: true
    }
);

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;