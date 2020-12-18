export default {
    state: {
        todoTasks: [
            { name: "Code Sign Up Page" },
            { name: "Test Dashboard" },
            { name: "Style Registration" },
            { name: "Help with Designs" }
        ],
        inProgressTasks: [],
        testingTasks: [],
        doneTasks: []
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
        }
    }
}