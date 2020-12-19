<template>
    <div class="dashboard">
        <Search></Search>
        <router-view></router-view>
        <GitHubCorner></GitHubCorner>
    </div>
</template>

<script>

import Search from "./Search";
import GitHubCorner from "../../components/GitHubCorner/GitHubCorner";

export default {
    components: {
        Search,
        GitHubCorner
    }
}

</script>