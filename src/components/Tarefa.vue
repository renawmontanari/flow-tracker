<script lang="ts">
import Cronometro from "./Cronometro.vue";

export default {
  name: "Tarefa",
  components: {
    Cronometro,
  },
};
</script>

<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">descrição da tarefa</div>
      <div class="column"><Cronometro :tempoEmSegundos="15" /></div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: rgb(82, 82, 82);
}
</style>
