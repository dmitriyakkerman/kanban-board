<template>
    <form class="form" @submit.prevent="add">
        <input v-model="newTask" placeholder="Enter Task"/>
        <input type="submit" value="Add">
    </form>
</template>

<script>

    export default {
        data() {
            return {
                newTask: ""
            };
        },
        methods: {
            add: function() {
                if (this.newTask) {
                    this.arrTodo.push({ name: this.newTask });
                    this.newTask = "";
                }
            }
        }
    }

</script>