<script lang="ts">
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import ITarefa from "../interfaces/ITarefa";

export default {
  name: "App",
  components: {
    Formulario,
    Tarefa,
    Box,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
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
  },
};
</script>

<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Tarefa class="m-4" v-for="tarefa in tarefas" :tarefa="tarefa" />
    <Box class="m-4" v-if="listaVazia">
      Você não está muito produtivo hoje <i class="fas fa-smile"></i>
    </Box>
  </div>
</template>
