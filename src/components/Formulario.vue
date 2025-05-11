<script lang="ts">
import Temporizador from "./Temporizador.vue";

export default {
  name: "Formulario",
  components: {
    Temporizador,
  },
  data() {
    return {
      descricao: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorido: number): void {
      console.log("Tempo da tarefa: ", tempoDecorido);
      console.log("Nome da tarefa: ", this.descricao);
      this.descricao = "";
    },
  },
};
</script>

<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>
