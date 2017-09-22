<template>
  <div class="item">
    <div>
        <div class="item-img">
            <img 
                :alt="listItem.name" 
                :src="items.ali_image" 
                style="opacity: 1;"
            >
        </div>
        <h6>{{listItem.name}}</h6>
        <h3>{{items.sub_title}}</h3>
        <div class="params-colors">
            <ul class="colors-list">
                <li
                    v-for="(icon,i) in icons"
                    :key="i"
                    @mouseenter="index = i"
                >
                    <a href="javascript:;" :class="{active: i === index}">
                        <img :src="'http://img01.smartisanos.cn/'+ icon.spec_json[0].image +'20X20.jpg'">
                    </a>
                </li>
            </ul>
        </div>
        <div class="item-btns clearfix">
            <span class="item-gray-btn"><a href="javascript:;" target="_blank">查看详情</a> </span>
            <span 
                class="item-blue-btn" 
                v-show="items.direct_to_cart"
                @click="smallShopCart"
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
  data () {
    return {
        index: 0
    }
  },
  props: ['listItem'],
  computed: {
      items () {
        return this.listItem.sku_info[this.index]
      },
      icons () {
        return this.listItem.sku_info  
      }
  },
  methods: {
      smallShopCart () {
        Axios.post(
            'http://localhost:3100/api/setShopCarList',
            {
              carList: JSON.stringify(this.items)
            }
        )
        .then((data)=>{
            this.$store.commit('changeCartData',data.data)
        })
        .catch((error)=>{
            console.log(error)
        })
      }
  }
}
</script>
