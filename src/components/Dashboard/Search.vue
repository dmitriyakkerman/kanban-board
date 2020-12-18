<template>
    <form action="" class="search-form">
        <input type="text" v-model="searchRequest" class="search-form__input">
    </form>
</template>

<script>

    export default {
        data() {
            return {
                searchRequest: ''
            }
        }
    }

</script>