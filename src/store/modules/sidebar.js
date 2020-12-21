export default {
    state: {
        links: [
            {
                name: 'Tasks', url: '/', icon: 'dashboard', exact: true
            },
            {
                name: 'In Progress', url: '/in-progress', icon: 'play_circle_outline'
            },
            {
                name: 'Testing', url: '/testing', icon: 'settings'
            },
            {
                name: 'Done', url: '/done', icon: 'done'
            },
            {
                name: 'Stats', url: '/stats', icon: 'insert_chart'
            }
        ]
    },
    getters: {
        links(state) {
            return state.links
        }
    }
}