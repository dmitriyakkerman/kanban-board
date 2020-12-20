export default {
    state: {
        todoTasks: JSON.parse(localStorage.getItem('todoTasks')) || [
            {
                id: Date.now(), title: 'Initial task', text: 'Initial task', deadline: new Date()
            }
        ],
        inProgressTasks: JSON.parse(localStorage.getItem('inProgressTasks')) || [],
        testingTasks: JSON.parse(localStorage.getItem('testingTasks')) || [],
        doneTasks: JSON.parse(localStorage.getItem('doneTasks')) || [],
        taskToSearch: ''
    },
    getters: {
        todoTasks(state) {
            return state.todoTasks
        },
        inProgressTasks(state) {
            return state.inProgressTasks
        },
        testingTasks(state) {
            return state.testingTasks
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
        updateTodoTasks(state, tasks) {
            state.todoTasks = tasks
            localStorage.setItem('todoTasks', JSON.stringify(state.todoTasks))
        },
        updateInProgressTasks(state, tasks) {
            state.inProgressTasks = tasks
            localStorage.setItem('inProgressTasks', JSON.stringify(state.inProgressTasks))
        },
        updateTestingTasks(state, tasks) {
            state.testingTasks = tasks
            localStorage.setItem('testingTasks', JSON.stringify(state.testingTasks))
        },
        updateDoneTasks(state, tasks) {
            state.doneTasks = tasks
            localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks))
        },
        addTodoTask(state, task) {
            state.todoTasks.push(task);
            localStorage.setItem('todoTasks', JSON.stringify(state.todoTasks))
        },
        removeTodoTask(state, id) {
            state.todoTasks = state.todoTasks.filter(function (task) {
                return task.id !== id;
            });
            localStorage.setItem('todoTasks', JSON.stringify(state.todoTasks))
        },
        removeTestingTask(state, id) {
            state.testingTasks = state.testingTasks.filter(function (task) {
                return task.id !== id;
            });
            localStorage.setItem('testingTasks', JSON.stringify(state.testingTasks))
        },
        removeInProgressTask(state, id) {
            state.inProgressTasks = state.inProgressTasks.filter(function (task) {
                return task.id !== id;
            });
            localStorage.setItem('inProgressTasks', JSON.stringify(state.inProgressTasks))
        },
        removeDoneTask(state, id) {
            state.doneTasks = state.doneTasks.filter(function (task) {
                return task.id !== id;
            });
            localStorage.setItem('doneTasks', JSON.stringify(state.doneTasks))
        }
    }
}