<template>
  <Nav />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./Nav.vue"

export default defineComponent({
  name: "Header",
  components: {
    Nav
  }
});
</script>