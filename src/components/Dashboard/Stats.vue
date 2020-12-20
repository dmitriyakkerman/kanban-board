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
                labels: ['Todo', 'In Progress', 'Testing', 'Done', 'Expired'],
                datasets: [{
                    data: [this.todoTasks.length, this.inProgressTasks.length, this.testingTasks.length, this.doneTasks.length, 1],
                    backgroundColor: [
                        '#399dff',
                        '#ffd74c',
                        '#ff8653',
                        '#0fd34b',
                        '#000'
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