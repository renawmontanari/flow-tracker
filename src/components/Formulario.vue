<script lang="ts">
import Temporizador from "./Temporizador.vue";

export default {
  name: "Formulario",
  components: {
    Temporizador,
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
        />
      </div>
      <div class="column">
        <Temporizador />
      </div>
    </div>
  </div>
</template>
