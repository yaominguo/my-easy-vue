<template>
  <a-layout class="main-layout">
    <a-layout-header class="layout-header">
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider class="layout-sider" width="30vw" theme="light">
        <ComponentLibrary />
      </a-layout-sider>
      <a-layout-content class="layout-content">
        <EditGround />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './header.vue'
import ComponentLibrary from './component-library.vue'
import EditGround from './edit-ground.vue'
export default defineComponent({
  name: 'MainLayout',
  components: {
    Header,
    ComponentLibrary,
    EditGround,
  },
})
</script>

<style lang="stylus" scoped>
.main-layout
  width 100%
  height 100%
  overflow hidden
  .layout-header
    background #fff
    box-shadow 0 0 .05rem .01rem rgba(0,0,0,.5)
    z-index 1
  .layout-sider
    height 100%
  .layout-content
    width 70vw
</style>
