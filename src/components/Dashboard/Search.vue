<template>
    <form action="" class="search-form">
        <div class="search-form__input input-field">
            <input type="text" id="search" v-model="searchRequest" @input="filterValue($event.target.value)">
            <label for="search">Search task</label>
        </div>
    </form>
</template>

<script>

    import {mapMutations} from 'vuex'

    export default {
        data() {
            return {
                searchRequest: ''
            }
        },
        methods: {
            ...mapMutations(['setSearchRequest']),
            filterValue(value) {
                this.setSearchRequest(value)
            }
        }
    }

</script>