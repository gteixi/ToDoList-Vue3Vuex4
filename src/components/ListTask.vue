<template>
  <div class="list">
    <div
      v-for="task in allTasks"
      :key="task.id"
      class="list_container"
    >
      <ItemTask :task="task" />
    </div>
  </div>
</template>

<script lang="ts">
import ItemTask from '@/components/ItemTask/ItemTask.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
  ItemTask,
  },
  computed:{
    ...mapGetters(['allTasks'])
  }
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.list {
  margin-top: 15px;
}

.list_container {
  @include display (flex, row, wrap, none);
  justify-content: space-around;
  @include size(100%, 60px);
  margin-top: 5px;
  position: relative;
  overflow: hidden;
  background: $light_green_task_color;
  border-style: solid;
  border-width: 2px;
  border-radius: 27px;
}

</style>