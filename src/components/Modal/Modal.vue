<template>
    <div id="modal" class="modal" ref="modal">
        <div class="modal-content">
            <h4>New task</h4>
            <form class="" @submit.prevent="submitTask">
                <div class="input-field">
                    <textarea id="textarea" class="materialize-textarea" v-model="taskText"></textarea>
                    <label for="textarea">Task text</label>
                </div>
                <div class="input-field">
                    <input id="task-text" type="text" class="datepicker" ref="datepicker">
                    <label for="task-text">Task deadline</label>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </form>
        </div>
    </div>
</template>

<script>

    import {mapMutations} from 'vuex'

    export default {
        data() {
            return {
                taskText: '',
                date: null
            }
        },
        methods: {
            ...mapMutations(['addTodoTask']),
            submitTask() {
                if(this.taskText.trim()) {
                    let todoTask = {
                        id: Date.now(),
                        text: this.taskText,
                        date: this.date.date
                    };

                    this.addTodoTask(todoTask);
                    this.taskText = '';
                }
            }
        },
        mounted() {
            window.modal = window.M.Modal.init(this.$refs.modal);
            this.date = window.M.Datepicker.init(this.$refs.datepicker, {
                format: 'mmm dd, yyyy',
                defaultDate: new Date()
            });
        },
        destroyed() {
            window.modal.destroy();

            if(this.date) {
                this.date.destroy();
            }
        }
    }

</script>