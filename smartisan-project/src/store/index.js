import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        smallCartData: [],
    },
    mutations: {
        changeCartData(state, payload) {
            state.smallCartData = payload.car_list
        }
    }
})

export default store