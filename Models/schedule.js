const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, 'Please provide the subject to the task'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    }, 

    Date: {
        type: Date,
        required: [true, 'Please provide the subject to the task']
    },

    Time: {
        type: Time,
        required: [true, 'Please provide the time']
    },

    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)