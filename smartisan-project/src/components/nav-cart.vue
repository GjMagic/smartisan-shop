<template>
  <div>
    <a href="javascript:;">购物车</a>
    <!--根据class改变颜色-->
    <span class="cart-empty-num cart-num">
        <i>{{smallCartCount}}</i>
    </span>
    <div class="nav-cart-wrapper">
        <div class="nav-cart-list">
            <div 
                class="empty"
                v-show="!smallCartList.length">
                <h3>购物车为空</h3>
                <p>您还没有选购任何商品，现在前往商城选购吧!</p>
            </div>
            <div class="full" v-show="smallCartList.length">
                <div class="nav-cart-items">
                    <ul>
                        <li 
                            class="clear"
                            v-for="(item,index) in smallCartList"
                            :key="index">
                            <div class="cart-item js-cart-item cart-item-sell">
                                <div class="cart-item-inner">
                                    <div class="item-thumb">
                                        <img :src="item.ali_image">
                                    </div>
                                    <div class="item-desc">
                                        <div class="cart-cell">
                                            <h4>
                                                <a href="#/item/100027401">{{item.title}}</a>
                                            </h4>
                                            <p class="attrs">
                                                <span>{{item.spec_json[0].show_name}}</span>
                                            </p>
                                            <h6>
                                                <span class="price-icon">¥</span>
                                                <span class="price-num">{{item.price}}</span>
                                                <span class="item-num">x {{item.sku_num}}</span>
                                            </h6>
                                        </div>
                                    </div>
                                    <div 
                                        class="del-btn"
                                        @click="delSmallCart(item)"
                                    >删除</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div 
                    class="nav-cart-total"
                    v-show="smallCartList.length"
                    >
                    <p>共 <strong class="ng-binding">{{smallCartCount}}</strong> 件商品</p>
                    <h5>
                        合计：
                        <span class="price-icon">¥</span>
                        <span 
                            class="price-num ng-binding" 
                            ng-bind="cartMenu.totalPrice">{{smallCartPrice}}</span>
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
    smallCartList () {
      return this.$store.state.smallCartData
    },
    smallCartCount () {
      let count = 0
      this.smallCartList.forEach(function(ele) {
        count += ele.sku_num    
      })
      return count
    },
    smallCartPrice () {
      let price = 0;
      this.smallCartList.forEach((ele) => {
        price += ele.sku_num*ele.price
      })
      return price
    }
  },
  mounted () {
    Axios.get('http://localhost:3100/api/getShopCarList')
    .then((data) => {
      this.$store.commit('changeCartData',data.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },
  methods: {
    delSmallCart (item) {
      Axios.post(
        'http://localhost:3100/api/removeCarShopById',
        {
          removeId: item.sku_id
        }
      )
      .then((data) => {
        this.$store.commit('changeCartData',data.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
