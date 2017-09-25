<template>
	<div id="main">
		<div class="store-content item">
			<div class="item-box">
				<div class="gallery-wrapper">
					<div class="gallery">
						<div class="thumbnail">
							<ul>
								<li 
									:class="{on: i === index}"
									v-for="(item,i) in itemsData.ali_images"
									:key="i"
									@click="enterAliImgs(i)"
								>
									<img :src="item + '?x-oss-process=image/resize,w_54/quality,Q_90/format,webp'">
								</li>
							</ul>
						</div>
						<div class="thumb">
							<ul>
								<li 
									:class="{on: i === index}"
									v-for="(item,i) in itemsData.ali_images"
									:key="i"
								>
									<img :src="item + '?x-oss-process=image/resize,w_440/quality,Q_90/format,webp'">
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="banner">
					<div class="sku-custom-title">
						<div class="params-price">
							<span>
								<em>¥</em>
								<i>{{itemsData.price}}</i>
							</span>
						</div>
						<div class="params-info">
							<h4>{{itemsData.title}}</h4>
							<h6>{{itemsData.sub_title}}</h6>
						</div>
					</div>
					<div class="sku-dynamic-params-panel">
						<div class="sku-dynamic-params clear">
							<span class="params-name">颜色</span>
							<ul class="params-colors">
								<li 
									:class="{cur: parseInt(item.id) === parseInt(itemId)}"
									v-for="(item,i) in itemsData.sku_list"
									:key="i"
									@click="enterColor(item.id)"
								>
									<!-- :title鼠标悬停几秒钟查看此处动态绑定的提示信息！ -->
									<router-link 
										:title="item.color" 
										:to="{name: 'ItemInfo', query: {itemId: item.id}}"
										>
										<img :src="'http://img01.smartisanos.cn/'+ item.image +'20X20.jpg'">
									</router-link>
								</li>
							</ul>
						</div>
						<div class="sku-dynamic-params clear">
							<div class="params-name">数量</div>
							<div class="params-detail clear">
								<div class="item-num js-select-quantity">
									<span class="down down-disabled">-</span>
									<span class="num">1</span>
									<span class="up up-disabled">+</span>
								</div>
							</div>
						</div>
					</div>
					<div class="sku-status">
						<div class="cart-operation-wrapper clearfix">
							<span class="blue-title-btn js-add-cart">
								<a @click="addToCart">加入购物车</a>
							</span>
							<span class="gray-title-btn">
								<a>现在购买</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import newItemsData from '../lib/newItemsData'
export default {
	data () {
		return {
			newItemsData,
			index: 0,
			itemId: this.$route.query.itemId
		}
	},
	watch: {
		itemId () {
			this.itemId = this.$route.query.itemId
		}
	},
	computed: {
		itemsData () {
			let itemInfo = this.newItemsData.filter((obj) => {
				return parseInt(obj.sku_id) === parseInt(this.itemId)
			})[0]
			return itemInfo
		}
	},
	methods: {
		enterAliImgs (i) {
			this.index = i
		},
		enterColor (id) {
			this.itemId = id
		},
		addToCart() {
      
    }
	}
}
</script>

