<template>
<div>
    <a href="javascript:;">购物车</a>
    <!--根据class改变颜色-->
    <span 
    class="cart-empty-num"
    :class="{'cart-num': cartData.length}"
    >
        <i>{{totalCount}}</i>
    </span>
    <div class="nav-cart-wrapper">
        <div class="nav-cart-list">
            <div class="empty" v-if="!cartData.length">
                <h3>购物车为空</h3>
                <p>您还没有选购任何商品，现在前往商城选购吧!</p>
            </div>
            <div class="full" v-else>
                <div class="nav-cart-items">
                    <ul>
                        <li 
                        class="clear"
                        v-for="(cartItem,index) in cartData"
                        :key="index"
                        >
                            <div class="cart-item js-cart-item cart-item-sell">
                                <div class="cart-item-inner">
                                    <div class="item-thumb">
                                        <img :src="cartItem.ali_image">
                                    </div>
                                    <div class="item-desc">
                                        <div class="cart-cell">
                                            <h4>
                                                <a href="#/item/100027401">{{cartItem.title}}</a>
                                            </h4>
                                            <p class="attrs">
                                                <span>{{cartItem.spec_json[0].item_value}}</span>
                                            </p>
                                            <h6>
                                                <span class="price-icon">¥</span>
                                                <span class="price-num">{{cartItem.price}}</span>
                                                <span class="item-num">x {{cartItem.sku_num}}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div 
                                    class="del-btn"
                                    @click="delSmallCart(cartItem)"
                                    >删除</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="nav-cart-total">
                    <p>共 <strong class="ng-binding">{{totalCount}}</strong> 件商品</p>
                    <h5>
                        合计：<span class="price-icon">¥</span>
                        <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">
                            {{totalPrice}}
                        </span>
                    </h5>
                    <h6>
                        <a ng-href="http://www.smartisan.com/shop/#/cart" class="nav-cart-btn" href="http://www.smartisan.com/shop/#/cart">去购物车</a>
                    </h6>
                </div>
            </div>
        </div>
    </div>            
</div>
</template>
<script>
import Axios from 'axios'
export default {
  computed: {
    cartData() {
      return this.$store.state.smallCartData
    },
    totalCount() {
      let count = 0
      this.cartData.forEach(function(obj) {
          count += obj.sku_num
      });
      return count
    },
    totalPrice() {
      let price = 0
      this.cartData.forEach(function(obj) {
          price += obj.sku_num * obj.price
      });
      return price
    }
  },
  mounted() {
    Axios.get('http://localhost:3100/api/getShopCarList')
      .then((data) => {
        this.$store.commit('getCartData',data.data)
      })
      .catch((error) => {
          console.log(error)
      })
  },
  methods: {
    delSmallCart(cartItem) {
      Axios.post(
        'http://localhost:3100/api/removeCarShopById',
        {
            removeId: cartItem.sku_id
        }
      )
      .then((data) => {
        this.$store.commit('delCartData',data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

