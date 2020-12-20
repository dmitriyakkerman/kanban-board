<template>
    <div class="sidebar">
        <div class="sidebar__inner">
            <div class="sidebar__logo">
                <i class="material-icons large white-text">dashboard</i>
            </div>
            <ul class="sidebar-menu">
                <router-link class="sidebar-menu__item" tag="li" to="/" exact="" active-class="active">
                    <a class="sidebar-menu__btn btn-floating btn-large waves-effect white-text"><i class="material-icons">dashboard</i></a>
                    <span>Tasks</span>
                </router-link>
                <router-link class="sidebar-menu__item" tag="li" to="/in-progress" active-class="active">
                    <a class="sidebar-menu__btn btn-floating btn-large waves-effect white-text"><i class="material-icons">play_circle_outline</i></a>
                    <span>In Progress</span>
                </router-link>
                <router-link class="sidebar-menu__item" tag="li" to="/testing" active-class="active">
                    <a class="sidebar-menu__btn btn-floating btn-large waves-effect white-text"><i class="material-icons">settings</i></a>
                    <span>Testing</span>
                </router-link>
                <router-link class="sidebar-menu__item" tag="li" to="/done" active-class="active">
                    <a class="sidebar-menu__btn btn-floating btn-large waves-effect white-text"><i class="material-icons">done</i></a>
                    <span>Done</span>
                </router-link>
                <router-link class="sidebar-menu__item" tag="li" to="/stats" active-class="active">
                    <a class="sidebar-menu__btn btn-floating btn-large waves-effect white-text"><i class="material-icons">insert_chart</i></a>
                    <span>Stats</span>
                </router-link>
                <li class="sidebar-menu__item">
                    <a href="#modal" class="sidebar-menu__btn btn-floating btn-large waves-effect white-text modal-trigger" @click.prevent="openModal"><i class="material-icons">add</i></a>
                    <span>New task</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        methods: {
            openModal() {
                window.modal.open();
            }
        }
    }

</script>