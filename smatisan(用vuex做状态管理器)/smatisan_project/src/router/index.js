import Vue from 'vue'
import Router from 'vue-router'
import HeaderNav from '@/components/header-nav'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'HeaderNav',
        component: HeaderNav
    }]
})