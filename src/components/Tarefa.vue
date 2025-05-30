<script lang="ts">
import { PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "@/interfaces/ITarefa";
import Box from "./Box.vue";
import Botao from "./Botao.vue";

export default {
  name: "Tarefa",
  emits: ["aoTarefaClicada"],
  components: {
    Cronometro,
    Box,
    Botao,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
  methods: {
    tarefaClicada(): void {
      this.$emit("aoTarefaClicada", this.tarefa);
    },
  },
};
</script>

<template>
  <Box>
    <div class="columns is-vcentered clicavel" @click="tarefaClicada">
      <div class="column is-4">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || "Sem projeto vinculado" }}
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center">
          <i class="fas fa-clock mr-2"></i>
          <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
        </div>
      </div>
    </div>
  </Box>
</template>

<style scoped>
.clicavel {
  cursor: pointer;
}
</style>
