import thousandSeperator from './thousandSeperator'

export default {
    install(Vue) {
        Vue.filter('thousandSeperator', thousandSeperator)
    },
}