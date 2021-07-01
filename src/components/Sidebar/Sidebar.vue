<template>
    <div class="sidebar">
        <div class="sidebar__inner">
            <div class="sidebar__logo">
                <i class="material-icons large white-text">dashboard</i>
            </div>
            <ul class="sidebar-menu">
                <li class="sidebar-menu__item">
                    <a href="#modal" class="sidebar-menu__btn btn-floating btn-large waves-effect white-text modal-trigger" @click.prevent="openModal"><i class="material-icons">add</i></a>
                    <span>New task</span>
                </li>
                <router-link v-for="link in links" :key="link.url" class="sidebar-menu__item" active-class="active" tag="li" :to="link.url" :exact="link.exact">
                    <a class="sidebar-menu__btn btn-floating btn-large waves-effect white-text"><i class="material-icons">{{ link.icon }}</i></a>
                    <span>{{ link.name }}</span>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'

    export default {
        computed: {
          ...mapGetters(['links'])
        },
        methods: {
            openModal() {
                window.modal.open();
            }
        }
    }

</script>