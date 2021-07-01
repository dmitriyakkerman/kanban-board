export default {
    state: {
        todoTasks: {
            tasks: JSON.parse(localStorage.getItem('todoTasks')) ||
                [
                    {
                        id: Date.now(), title: 'Initial task', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', deadline: new Date()
                    }
                ],
            info: {
                title: 'Todo',
                classModifier: 'todo'
            }
        },
        inProgressTasks: {
            tasks: JSON.parse(localStorage.getItem('inProgressTasks')) || [],
            info: {
                title: 'In Progress',
                classModifier: 'in-progress'
            }
        },
        doneTasks: {
            tasks: JSON.parse(localStorage.getItem('doneTasks')) || [],
            info: {
                title: 'Done',
                classModifier: 'done'
            }
        },
        taskToSearch: ''
    },
    getters: {
        todoTasks(state) {
            return state.todoTasks
        },
        inProgressTasks(state) {
            return state.inProgressTasks
        },
        doneTasks(state) {
            return state.doneTasks
        },
        taskToSearch(state) {
            return state.taskToSearch
        }
    },
    mutations: {
        setSearchRequest(state, word) {
            state.taskToSearch = word
        },
        updateTasks(state, tasks) {
            if(tasks.info.title === 'Todo') {
                state.todoTasks.tasks = tasks.tasks;
                localStorage.setItem('todoTasks', JSON.stringify(state.todoTasks.tasks))
            }
            if(tasks.info.title === 'In Progress') {
                state.inProgressTasks.tasks = tasks.tasks;
                localStorage.setItem('inProgressTasks', JSON.stringify(state.inProgressTasks.tasks))
            }
            if(tasks.info.title === 'Done') {
                state.doneTasks.tasks = tasks.tasks;
                localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks.tasks))
            }
        },
        addTodoTask(state, task) {
            state.todoTasks.tasks.push(task);
            localStorage.setItem('todoTasks', JSON.stringify(state.todoTasks.tasks))
        },
        deleteTask(state, {id, title}) {
            if(title === 'Todo') {
                state.todoTasks.tasks = state.todoTasks.tasks.filter(function (task) {
                    return task.id !== id;
                });
                localStorage.setItem('todoTasks', JSON.stringify(state.todoTasks.tasks))
            }
            if(title === 'In Progress') {
                state.inProgressTasks.tasks = state.inProgressTasks.tasks.filter(function (task) {
                    return task.id !== id;
                });
                localStorage.setItem('inProgressTasks', JSON.stringify(state.inProgressTasks.tasks))
            }
            if(title === 'Done') {
                state.doneTasks.tasks = state.doneTasks.tasks.filter(function (task) {
                    return task.id !== id;
                });
                localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks.tasks))
            }
        }
    }
}