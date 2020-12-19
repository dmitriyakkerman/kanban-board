<script>

    import {Pie} from 'vue-chartjs'
    import {mapGetters} from 'vuex'

    export default {
        extends: Pie,
        computed: {
            ...mapGetters(['todoTasks', 'inProgressTasks', 'testingTasks', 'doneTasks'])
        },
        mounted() {
            this.renderChart({
                labels: ['Todo', 'In Progress', 'Testing', 'Expiring','Done'],
                datasets: [{
                    data: [this.todoTasks.length, this.inProgressTasks.length, this.testingTasks.length, 1, this.doneTasks.length],
                    backgroundColor: [
                        '#a696ff',
                        '#399dff',
                        '#ffd74c',
                        '#ff8653',
                        '#0fd34b',
                    ]
                }]
            },
            {
                responsive: true,
                maintainAspectRatio: false
            })
        }
    }

</script>