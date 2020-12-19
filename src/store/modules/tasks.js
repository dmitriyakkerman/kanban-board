export default {
    state: {
        todoTasks: JSON.parse(localStorage.getItem('todoTasks')) || [
            {
                id: 1, text: '111', deadline: null
            },
            {
                id: 2, text: '122211', deadline: new Date()
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
        }
    }
}