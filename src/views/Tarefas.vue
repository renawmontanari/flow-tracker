<script lang="ts">
import { useStore } from "@/store";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import Tarefa from "../components/Tarefa.vue";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFAS,
  OBTER_PROJETOS,
  OBTER_TAREFAS,
} from "@/store/tipo-acoes";
import { computed, ref, watchEffect } from "vue";
import ITarefa from "@/interfaces/ITarefa";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    Formulario,
    Tarefa,
    Box,
    Modal,
  },
  data() {
    return {
      tarefaSelecionada: null as ITarefa | null,
    };
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

    const filtro = ref("");

    //const tarefas = computed(() =>
    //  store.state.tarefa.tarefas.filter(
    //    (tarefasFiltradas) =>
    //      !filtro.value || tarefasFiltradas.descricao.includes(filtro.value)
    //  )
    //);

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value);
    });

    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
      filtro,
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.store.dispatch(CADASTRAR_TAREFAS, tarefa);
    },
    selecionarTarefa(tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa;
    },
    fecharModal() {
      this.tarefaSelecionada = null;
    },
    alterarTarefa() {
      this.store
        .dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal());
    },
  },
};
</script>

<template>
  <Formulario @aoSalvarTarefa="salvarTarefa" />
  <div class="lista">
    <Box class="m-4" v-if="listaVazia">
      Você não está muito produtivo hoje
      <i class="fas fa-smile"></i>
    </Box>
    <div class="field">
      <p class="control has-icons-left m-4">
        <input
          class="input"
          type="text"
          placeholder="Digite para filtrar"
          v-model="filtro"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-search"></i>
        </span>
      </p>
    </div>
    <Tarefa
      class="m-4"
      v-for="(tarefa, index) in tarefas"
      :tarefa="tarefa"
      :key="index"
      @aoTarefaClicada="selecionarTarefa"
    />
    <Modal :mostrarModal="tarefaSelecionada != null">
      <template v-slot:cabecalho>
        <p class="modal-card-title">Editando uma tarefa</p>
        <button class="delete" aria-label="close" @click="fecharModal"></button>
      </template>
      <template v-slot:corpo>
        <div class="field">
          <label for="descricaoDaTarefa " class="label"
            >Descrição da tarefa</label
          >
          <input
            type="text"
            class="input"
            v-model="tarefaSelecionada.descricao"
            id="descricaoDaTarefa"
          />
        </div>
      </template>
      <template v-slot:rodape>
        <div class="buttons">
          <button class="button is-success" @click="alterarTarefa">
            Salvar alterações
          </button>
          <button class="button" @click="fecharModal">Cancelar</button>
        </div>
      </template>
    </Modal>
  </div>
</template>
