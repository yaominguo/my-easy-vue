<template>
  <div class="component-library">
    <a-tabs class="library-tabs" tab-position="left">
      <a-tab-pane v-for="tab in tabs" :key="tab.key">
        <template #tab>
          <div class="tab-name">
            <component :is="tab.icon" />
            <span>{{ tab.name }}</span>
          </div>
        </template>
        <component :is="tab.list" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { BuildOutlined, LineChartOutlined } from '@ant-design/icons-vue'
import BasicComponentsList from './basic-components-list.vue'
import ChartComponentsList from './chart-components-list.vue'
import store from '@/store'

export default defineComponent({
  name: 'ComponentLibrary',
  components: {
    BuildOutlined,
    LineChartOutlined,
    BasicComponentsList,
    ChartComponentsList,
  },
  setup() {
    const tabs = computed(() => store.state.libraryMenu)
    const BuildOutlined = computed(() => 'BuildOutlined')
    const LineChartOutlined = computed(() => 'LineChartOutlined')
    return {
      tabs,
      BuildOutlined,
      LineChartOutlined,
    }
  },
})
</script>

<style lang="stylus" scoped>
.component-library
  height 100%
  padding .1rem 0
  box-sizing border-box
  overflow hidden
  .library-tabs
    height 100%
    .tab-name
      display flex
      flex-direction column
      align-items center
      justify-content center
      .anticon
        margin 0
</style>
