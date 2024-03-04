const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, 'Please provide the subject to the task'],
        trim: true,
        maxlength: [20, 'name can not be more than 20 characters']
    }, 

    registrationNumber: {
        type: String,
        required: [false]
    },
 
    googleToken: {
        type: String,
        default: null,
    },
    
    microsoftToken: {
        type: String,
        default: null
    },

    CreateDate: {
        type: Date,
        required: [true, 'Please provide the subject to the task'],
        maxlength: [990, 'name can not be more than 20 characters']
    }
})

module.exports = mongoose.model('User', userSchema)