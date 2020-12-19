<template>
    <div id="modal" class="modal" ref="modal">
        <div class="modal-content">
            <h4>New task</h4>
            <form class="" @submit.prevent="submitTask">
                <div class="input-field">
                    <input id="taskTitle" type="text" v-model="taskTitle">
                    <label for="taskTitle">Task title</label>
                </div>
                <div class="input-field">
                    <textarea id="taskText" class="materialize-textarea" v-model="taskText"></textarea>
                    <label for="taskText">Task text</label>
                </div>
                <div class="input-field">
                    <input id="task-text" type="text" class="modal__datepicker datepicker" ref="datepicker">
                    <label for="task-text">Task deadline</label>
                </div>
                <button class="modal__submit btn waves-effect waves-light" type="submit" name="action">Submit
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
                taskTitle: '',
                taskText: '',
                deadline: null
            }
        },
        methods: {
            ...mapMutations(['addTodoTask']),
            submitTask() {
                if(this.taskTitle.trim()) {
                    let todoTask;

                    if(this.deadline) {
                        todoTask = {
                            id: Date.now(),
                            title: this.taskTitle,
                            text: this.taskText,
                            deadline: this.deadline.date
                        };
                    }

                    else {
                        todoTask = {
                            id: Date.now(),
                            title: this.taskTitle,
                            text: this.taskText
                        };
                    }

                    this.addTodoTask(todoTask);
                    window.modal.close();
                    this.taskText = '';
                }
            }
        },
        mounted() {
            window.modal = window.M.Modal.init(this.$refs.modal);
            this.deadline = window.M.Datepicker.init(this.$refs.datepicker, {
                format: 'dd.mm.yyyy'
            });
        },
        destroyed() {
            window.modal.destroy();

            if(this.deadline) {
                this.deadline.destroy();
            }
        }
    }

</script>