<template>
  <div id="main">
        <div class="sku-box store-content">
            <div class="sort-option">
                <ul class="line clear">
                    <li><a href="javascript:;" class="active">综合排序</a></li>
                    <li><a href="javascript:;" class="">销量排序</a></li>
                    <li><a href="javascript:;" class="">价格低到高</a></li>
                    <li><a href="javascript:;" class="">价格高到低</a></li>
                </ul>
            </div>
            <div class="gray-box">
                <div class="item-box">
                    <list-item 
                        v-for="(item,index) in shopList" 
                        :key="index"
                        :listItem="item"
                    >
                    </list-item>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ListItem from '@/views/shop-list/list-item'
import Axios from 'axios'
export default {
  data () {
    return {
      shopList: []
    }
  },
  components: {
    ListItem
  },
  mounted () {
    Axios.get(
        'http://localhost:3100/api/list'
    )
    .then((data) => {
        this.shopList = data.data.list
    })
    .catch((data)=>{
        console.log(data)
    })
  }
}
</script>
