<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img 
        :alt="listItemData.title" 
        :src="listItemData.ali_image" 
        style="opacity: 1;"
        >
      </div>
      <h6>{{listItemData.title}}</h6>
      <h3>{{listItemData.sub_title}}</h3>
      <div class="params-colors">
        <ul class="colors-list">
          <li 
          v-for="(item,i) in itemSkuInfo"
          :key="i"
          >
            <a 
              href="javascript:;" 
              :class="{active: i === index}"
              @mouseenter="smallIcon(i)"
              >
              <img :src="'http://img01.smartisanos.cn/'+ item.image +'20X20.jpg'">
            </a>
          </li>
        </ul>
      </div>
      <div class="item-btns clearfix">
        <span class="item-gray-btn">
            <a href="javascript:;" target="_blank">查看详情</a>
        </span>
        <span 
        class="item-blue-btn"
        v-show="listItemData.direct_to_cart"
        @click="addToCart"
        >加入购物车</span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i><span>{{listItem.price}}.00</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover">
        <a href="javascript:;" target="_blank"></a>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      index: 0
    }
  },
  props: ['listItem'],
  computed: {
    listItemData() {
      return this.listItem.sku_info[this.index] 
    },
    itemSkuInfo() {
      let arr = []
      this.listItem.sku_info.forEach(function(obj) {
        arr.push(obj.spec_json[0])   
      });
      return arr
    },
    maxLimitBl() {
      return this.$store.state.maxLimit
    }
  },
  methods: {
    smallIcon(i) {
      this.index = i
    },
    addToCart() {
      Axios
        .post(
          'http://localhost:3100/api/setShopCarList',
          {
            carList: JSON.stringify(this.listItemData)
          }
        )
        .then((data) => {
          this.$store.commit('addCartData',data.data)
        })
        .catch((error) => {
          console.log(error)
        })

        // 点击添加后购物窗出现几秒后再消失
        this.$store.commit('cartAppear')
    }
  }
}
</script>
