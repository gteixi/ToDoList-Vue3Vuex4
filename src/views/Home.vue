<template>
  <div class="home">
    <div class="home__container">
      <AddTask />
      <ListTask />
    </div>
  </div>
</template>

<script lang="ts">
import AddTask from '@/components/AddTask/AddTask.vue'
import ListTask from "@/components/ListTask.vue"

export default ({
  name: "Home",
  components: {
    AddTask,
    ListTask,
  }
})
</script>

<style lang="scss">
@import "@/styles/variables.scss";
@import "@/styles/mixins.scss";

.home {
  @include display (flex, column, wrap, center);
  background-color: $light_blue_background_color;
  height: calc(100vh - 77px);
}

.home__container{
  @include display (flex, column, wrap, center);
  @include size (87%, 100%);
  margin: 20px;
  margin-top: 27px;
  position: relative;
  overflow: hidden;
  background: $light_green_note_color;
  border-style: solid;
  border-width: 2px;
  border-radius: 27px;
}

</style>
