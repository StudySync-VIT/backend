const userSchema = require("../Models/userSchema")


const createUser = async (req, res) => {
    const task = await userSchema.create(req.body)
    res.body(201).json({task})
}


// const getAllTask = (req, res) => {
// 	res.send('All items')
// }

// const createTask = async (req, res) => {
// 	try {
//         const task = await Task.create(req.body)
//         res.body(201).json({task})
        
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getTask = (req, res) => {
// 	res.send('got Single Task')
// }

// const updateTask = (req, res) => {
// 	res.send('Task Updated')
// }

// const deleteTask = (req, res) => {
// 	res.send('Task deleted')
// }

module.exports = {
	createUser
}