const getAllTask = (req, res) => {
	res.send('All items')
}

const createTask = (req, res) => {
	res.send('Task created')
}

const getTask = (req, res) => {
	res.send('got Single Task')
}

const updateTask = (req, res) => {
	res.send('Task Updated')
}

const deleteTask = (req, res) => {
	res.send('Task deleted')
}

module.exports = {
	getAllTask, createTask, getTask, updateTask, deleteTask
}