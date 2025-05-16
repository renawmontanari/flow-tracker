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
      validator: (tarefa: ITarefa) => {
        return (
          typeof tarefa.descricao === "string" &&
          typeof tarefa.duracaoEmSegundos === "number"
        );
      },
    },
  },
  emits: ["removerTarefa", "concluirTarefa"],
  methods: {
    removerTarefa(): void {
      if (confirm("Tem certeza que deseja remover a tarefa?")) {
        this.$emit("removerTarefa", this.tarefa);
      }
    },
    concluirTarefa(): void {
      if (!this.tarefa.concluida) {
        this.$emit("concluirTarefa", { ...this.tarefa, concluida: true });
      }
    },
  },
  computed: {
    estaConcluida(): boolean {
      return this.tarefa.concluida || false;
    },
  },
};
</script>

<template>
  <Box :class="{ 'completed-task': estaConcluida }">
    <div class="columns is-vcentered">
      <div
        class="column is-7"
        :class="{ 'has-text-gray': estaConcluida, 'is-italic': estaConcluida }"
      >
        {{ tarefa.descricao || "Tarefa sem descrição" }}
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center">
          <i class="fas fa-clock mr-2"></i>
          <Cronometro
            :tempoEmSegundos="tarefa.duracaoEmSegundos"
            :pausado="estaConcluida"
          />
        </div>
      </div>
      <div class="column">
        <div class="buttons are-small">
          <Botao
            v-if="!estaConcluida"
            class="button is-success"
            @clicado="concluirTarefa"
            :disabled="estaConcluida"
            icone="fas fa-check"
            texto="Concluir"
          ></Botao>
          <Botao
            class="button is-danger"
            @clicado="removerTarefa"
            icone="fas fa-trash"
            texto="Remover"
          ></Botao>
        </div>
      </div>
    </div>
  </Box>
</template>

<style scoped>
.completed-task {
  border: 1px solid #35ee60;
  opacity: 1;
  padding: 1rem;
  border-radius: 4px;
}

.has-text-grey {
  color: #7a7a7a;
}
</style>
