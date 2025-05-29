<script lang="ts">
import { useStore } from "@/store";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import { OBTER_TAREFAS } from "@/store/tipo-acoes";
import { computed } from "vue";
import ITarefa from "@/interfaces/ITarefa";

export default {
  name: "App",
  components: {
    Formulario,
    Tarefa,
    Box,
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  setup() {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
    };
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
