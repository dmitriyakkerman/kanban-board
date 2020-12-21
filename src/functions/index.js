export function filteredTasks(tasks) {
    let that = this;
    let filteredNotes;
    filteredNotes = tasks.filter(function (task) {
        if(task.title.toLowerCase().indexOf(that.taskToSearch.toLowerCase()) !== -1) {
            return task
        }
    });
    return filteredNotes
}