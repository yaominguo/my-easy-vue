<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
})
</script>

<style lang="stylus">
html, body
  background rgba(0,0,0,0.5)
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  width 100%
  height 100%
  user-select none
  font-size 16vh
  line-height 1.5
  color #fff
#app
  width 100%
  height 100%
  overflow hidden
  font-size .1rem
  background url('/src/assets/images/background.jpg') center/cover no-repeat

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: .05rem;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background:rgba(91, 213, 255, 0.5)
  -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
  background:rgba(91, 213, 255, 0.5)
}
</style>
