require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5f1729f9a5d8c84debb208b8').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5f17296be5f1b94dc74804ae').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})