<script lang="ts">
import { PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "@/interfaces/ITarefa";
import Box from "./Box.vue";
import Botao from "./Botao.vue";

export default {
  name: "Tarefa",
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
    removerTarefa() {
      this.$emit("removerTarefa", this.tarefa);
    },
    concluirTarefa() {
      this.$emit("concluirTarefa", this.tarefa);
    },
  },
};
</script>

<template>
  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
      <div class="column">
        <div class="buttons">
          <Botao
            class="button is-small is-sucess"
            @click="$emit('concluirTarefa', tarefa)"
            icone="fas fa-check"
            texto="Concluir"
          ></Botao>
          <Botao
            class="button is-small is-danger"
            @click="$emit('removerTarefa', tarefa)"
            icone="fas fa-trash"
            texto="Remover"
          ></Botao>
        </div>
      </div>
    </div>
  </Box>
</template>
