export default {
    install(Vue) {
        Vue.prototype.$alert = function (html) {
            window.M.toast({html})
        }
    }
}