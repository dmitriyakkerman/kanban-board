<template>
  <div id="app" class="app">
    <Preloader></Preloader>
    <GitHubCorner></GitHubCorner>
    <component :is="layout"></component>
  </div>
</template>

<script>

    import Auth from "./layouts/Auth";
    import Main from "./layouts/Main";
    import Preloader from "./components/Loaders/Preloader";
    import GitHubCorner from "./components/GitHubCorner/GitHubCorner";

export default {
    name: 'App',
    components: {
        Auth,
        Main,
        Preloader,
        GitHubCorner
    },
    computed: {
        layout() {
            return this.$route.meta.layout || 'Main'
        }
    }
}
</script>

<style lang="scss">
    @import "~materialize-css/dist/css/materialize.min.css";
</style>