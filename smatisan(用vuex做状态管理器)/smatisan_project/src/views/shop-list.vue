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
                <shop-item
                  v-for="(item,index) in listData"
                  :key="index"
                  :listItem="item"
                ></shop-item>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import ShopItem from './shop-item'
export default {
  computed: {
    listData() {
      return this.$store.state.shopData
    }
  },
  components: {
    ShopItem
  },
  mounted () {
    this.$store.dispatch('changeDataAsync')
  }
}
</script>
