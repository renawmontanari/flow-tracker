<script lang="ts">
import BarraLateral from "./components/BarraLateral.vue";
import Box from "./components/Box.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import ITarefa from "./interfaces/ITarefa";

export default {
  name: "App",
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoClaroAtivo: false,
    };
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema(modoClaroAtivo: boolean) {
      this.modoClaroAtivo = modoClaroAtivo;
    },
    removerTarefa(tarefa: ITarefa) {
      this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id);
    },
  },
};
</script>

<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoClaroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <Tarefa
          v-for="tarefa in tarefas"
          :key="tarefa.id"
          :tarefa="tarefa"
          @removerTarefa="removerTarefa"
          @concluirTarefa="concluirTarefa"
        />
        <Box v-if="listaVazia"> Você não está muito produtivo hoje :( </Box>
      </div>
    </div>
  </main>
</template>

<style scoped>
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2c2c2c;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
