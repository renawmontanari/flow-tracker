<script lang="ts">
import { useStore } from "@/store";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import {
  CADASTRAR_TAREFAS,
  OBTER_PROJETOS,
  OBTER_TAREFAS,
} from "@/store/tipo-acoes";
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
    store.dispatch(OBTER_PROJETOS);
    return {
      tarefas: computed(() => store.state.tarefas),
      store,
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.store.dispatch(CADASTRAR_TAREFAS, tarefa);
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
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <div class="buttons">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
