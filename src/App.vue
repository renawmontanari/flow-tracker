<script lang="ts">
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";

export default {
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
  },
};
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <Formulario />
      <div class="lista"><Tarefa /><Tarefa /></div>
    </div>
  </main>
</template>

<style scoped>
.lista {
  padding: 1.25rem;
}
</style>
