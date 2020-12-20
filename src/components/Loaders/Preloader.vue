<template>
    <transition name="preloading">
        <div class="preloader" v-if="preloading" :class="{active: !preloading}">
            <i class="material-icons large">dashboard</i>
        </div>
    </transition>
</template>

<script>

    export default {
        data() {
            return {
                preloading: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.preloading = false
            }, 1500)
        }
    }

</script>