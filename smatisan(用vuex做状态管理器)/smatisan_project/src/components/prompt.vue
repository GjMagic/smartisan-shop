<template>
  <div id="prompt" v-if="maxLimitBl">
    <div class="module-dialog-layer" style="display: block;"></div>
    <div class="clear module-dialog module-dialog-confirm module-dialog-show" style="display: block; opacity: 1;">
      <div class="dialog-panel">
        <div class="topbar">
          <div class="dialog-tit clear">
            <h4 class="js-dialog-title">提示</h4>
          </div>
          <span class="dialog-close png" @click="maxLimit"></span>
        </div>
        <div class="dialog-con js-dialog-container">
          <div class="confirm-msg">商品已达到最大可购买数量，无法继续添加</div>
        </div>
        <div class="dialog-btn-wrap clear">
          <div class="blue-main-btn normal-main-btn js-dialog-done">
            <a @click="maxLimit">确定</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    maxLimitBl() {
      return this.$store.state.maxLimit
    }
  },
  methods: {
    maxLimit() {
      this.$store.commit('changeMaxLimit')
    }
  }
}
</script>
