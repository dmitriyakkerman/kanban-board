export default {
    state: {
        dashboardState: 'horizontal',
        dashboardToggling: false
    },
    getters: {
        dashboardState(state) {
            return state.dashboardState
        },
        dashboardToggling(state) {
            return state.dashboardToggling
        }
    },
    actions: {
        toggleDashboardType({commit}, dashboardType) {
            commit('closeBoards');

            setTimeout(() => {
                commit('toggleDashboardType', dashboardType)
            }, 500);

            setTimeout(() => {
                commit('openBoards')
            }, 500);
        }
    },
    mutations: {
        closeBoards(state) {
            state.dashboardToggling = true
        },
        openBoards(state) {
            state.dashboardToggling = false
        },
        toggleDashboardType(state, dashboardType) {
            state.dashboardState = dashboardType;
        }
    }
}