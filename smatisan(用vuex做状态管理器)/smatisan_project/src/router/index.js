import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ShopList from '../views/shop-list'
import ItemInfo from '@/views/item-info'

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'ShopList',
        component: ShopList
    }, {
        path: '/itemInfo',
        name: 'ItemInfo',
        component: ItemInfo
    }]
})