<template>
  <div class="edit-ground">
    <div class="board">
      <!-- <grid-layout
        :layout="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
      >
        <grid-item
          v-for="item in layout"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :key="item.i"
        >
          {{ item.i }}
        </grid-item>
      </grid-layout> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { GridLayout, GridItem } from 'vue-grid-layout'

export default defineComponent({
  name: 'EditGround',
  components: {
    GridLayout,
    GridItem,
  },
  setup() {
    const layout = ref([
      { x: 0, y: 0, w: 2, h: 2, i: '0' },
      { x: 2, y: 0, w: 2, h: 4, i: '1' },
      { x: 4, y: 0, w: 2, h: 5, i: '2' },
      { x: 6, y: 0, w: 2, h: 3, i: '3' },
      { x: 8, y: 0, w: 2, h: 3, i: '4' },
      { x: 10, y: 0, w: 2, h: 3, i: '5' },
      { x: 0, y: 5, w: 2, h: 5, i: '6' },
      { x: 2, y: 5, w: 2, h: 5, i: '7' },
      { x: 4, y: 5, w: 2, h: 5, i: '8' },
      { x: 6, y: 3, w: 2, h: 4, i: '9' },
      { x: 8, y: 4, w: 2, h: 4, i: '10' },
      { x: 10, y: 4, w: 2, h: 4, i: '11' },
      { x: 0, y: 10, w: 2, h: 5, i: '12' },
      { x: 2, y: 10, w: 2, h: 5, i: '13' },
      { x: 4, y: 8, w: 2, h: 4, i: '14' },
      { x: 6, y: 8, w: 2, h: 4, i: '15' },
      { x: 8, y: 10, w: 2, h: 5, i: '16' },
      { x: 10, y: 4, w: 2, h: 2, i: '17' },
      { x: 0, y: 9, w: 2, h: 3, i: '18' },
      { x: 2, y: 6, w: 2, h: 2, i: '19' },
    ])
    return { layout }
  },
})
</script>

<style lang="stylus" scoped>
.edit-ground
  width 100%
  height 100%
  padding .1rem
  box-sizing border-box
  display flex
  align-items center
  justify-content center
  .board
    width 80%
    height 50%
    background #fff
    box-shadow 0 0 .05rem .01rem rgba(0,0,0,0.2)
</style>
