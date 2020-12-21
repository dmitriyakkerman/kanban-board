<template>
    <div class="dashboard">
        <Search v-if="$router.currentRoute.path !== '/stats'"></Search>
        <transition name="fade">
            <router-view></router-view>
        </transition>
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