import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        shopData: [],
        smallCartData: [],
        isEnter: false,
        timer: null
    },
    mutations: {
        changeShopData(state, payload) {
            state.shopData = payload.list
        },
        addCartData(state, payload) {
            state.smallCartData = payload.car_list
        },
        getCartData(state, payload) {
            state.smallCartData = payload.car_list
        },
        delCartData(state, payload) {
            state.smallCartData = payload.car_list
        },
        enterCart(state) {
            state.isEnter = true
        },
        leaveCart(state) {
            state.isEnter = false
        },
        // 点击添加后购物窗出现几秒后再消失
        cartAppear(state) {
            state.isEnter = true

            // 避免连续点按钮时，频繁没和有
            if (state.timer) return

            state.timer = setTimeout(() => {
                state.isEnter = false
                state.timer = null
            }, 3000)
        }
    },
    actions: {
        changeDataAsync(context) {
            // context是与store实例具有相同方法和属性的对象
            Axios
                .get('http://localhost:3100/api/list')
                .then((data) => {
                    context.commit('changeShopData', data.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
})
export default store