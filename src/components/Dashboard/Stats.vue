<script>

    import {Pie} from 'vue-chartjs'
    import {mapGetters} from 'vuex'

    export default {
        extends: Pie,
        computed: {
            ...mapGetters(['todoTasks', 'inProgressTasks', 'doneTasks'])
        },
        mounted() {
            this.renderChart({
                labels: ['Todo', 'In Progress', 'Done'],
                datasets: [{
                    data: [this.todoTasks.tasks.length, this.inProgressTasks.tasks.length, this.doneTasks.tasks.length],
                    backgroundColor: [
                        '#399dff',
                        '#ffd74c',
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