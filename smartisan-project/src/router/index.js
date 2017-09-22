import Vue from 'vue'
import Router from 'vue-router'
import HearderNav from '@/components/header-nav.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HearderNav',
        component: HearderNav
    }]
})