<template>
    <div class="sidebar">
        <div class="sidebar__inner">
            <div class="sidebar__logo">
                <i class="material-icons large white-text">dashboard</i>
            </div>
            <ul class="sidebar-menu">
                <router-link v-for="link in links" :key="link.url" class="sidebar-menu__item" active-class="active" tag="li" :to="link.url" :exact="link.exact">
                    <a class="sidebar-menu__btn btn-floating btn-large waves-effect white-text"><i class="material-icons">{{ link.icon }}</i></a>
                    <span>{{ link.name }}</span>
                </router-link>
                <li class="sidebar-menu__item">
                    <a href="#modal" class="sidebar-menu__btn btn-floating btn-large waves-effect white-text modal-trigger" @click.prevent="openModal"><i class="material-icons">add</i></a>
                    <span>New task</span>
                </li>
                <li class="sidebar-menu__item">
                    <button class="sidebar-menu__btn btn-floating btn-large waves-effect white-text" @click="logout"><i class="material-icons">directions_walk</i></button>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex'
    import VueRouter from 'vue-router'
    const { isNavigationFailure, NavigationFailureType } = VueRouter

    export default {
        computed: {
          ...mapGetters(['links'])
        },
        methods: {
            openModal() {
                window.modal.open();
            },
            logout() {
                let that = this;
                try {
                    this.$store.dispatch('logout')
                    this.$alert('You are logged out')
                    this.$router
                        .push('/login')
                        .catch(failure => {
                            if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                                that.$router.push(failure.to.path)
                            }
                        })
                }
                catch (e) {
                    throw new Error(e)
                }
            }
        }
    }

</script>