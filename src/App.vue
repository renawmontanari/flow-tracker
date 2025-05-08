<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default {
  name: "App",
  components: {
    BarraLateral,
  },
};
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter"></div>
  </main>
</template>

<style scoped></style>
