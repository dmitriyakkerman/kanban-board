<template>
    <div class="dashboard">
        <Search v-if="$router.currentRoute.path !== '/stats'"></Search>
        <router-view></router-view>
    </div>
</template>

<script>

import Search from "./Search";

export default {
    components: {
        Search
    }
}

</script>