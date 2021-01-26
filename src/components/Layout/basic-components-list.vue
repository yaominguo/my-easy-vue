<template>
  <div>basic</div>
  <draggable
    v-model="myArray"
    :group="{ name: 'people', pull: 'clone', put: false }"
    item-key="id"
    :move="onMoveCallback"
    @start="drag = true"
    @end="drag = false"
    @change="handleChange"
  >
    <template #item="{ element }">
      <div>{{ element.name }}</div>
    </template>
  </draggable>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import draggable from 'vuedraggable'
export default defineComponent({
  name: 'BasicComponentsList',
  components: { draggable },
  setup() {
    const drag = ref(false)
    const myArray = ref([
      { name: '123', id: '123' },
      { name: '1234', id: '1234' },
      { name: '1235', id: '1235' },
    ])
    const handleChange = (e) => {
      console.log(e)
    }
    const onMoveCallback = (evt, originalEvent) => {
      console.log(evt, originalEvent)
      return true
    }
    return { drag, myArray, handleChange, onMoveCallback }
  },
})
</script>

<style lang="stylus" scoped></style>
