<script lang="ts">
import { PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "@/interfaces/ITarefa";

export default {
  name: "Tarefa",
  components: {
    Cronometro,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
};
</script>

<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ tarefa.descricao }}</div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: rgb(82, 82, 82);
}
</style>
