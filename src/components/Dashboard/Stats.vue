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
                labels: ['Todo', 'In Progress', 'Testing', 'Done'],
                datasets: [{
                    data: [this.todoTasks.tasks.length, this.inProgressTasks.tasks.length, this.testingTasks.tasks.length, this.doneTasks.tasks.length],
                    backgroundColor: [
                        '#399dff',
                        '#ffd74c',
                        '#ff8653',
                        '#0fd34b'
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