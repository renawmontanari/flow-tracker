<script lang="ts">
import { useStore } from "vuex";
import Temporizador from "./Temporizador.vue";
import { key } from "@/store";
import { computed, ref } from "vue";

export default {
  name: "Formulario",
  emits: ["aoSalvarTarefa"],
  components: {
    Temporizador,
  },
  setup(props, { emit }) {
    const store = useStore(key);

    const descricao = ref("");
    const idProjeto = ref("");

    const projetos = computed(() => store.state.projeto.projetos);

    const finalizarTarefa = (tempoDecorido: number): void => {
      emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorido,
        descricao: descricao.value,
        projeto: projetos.value.find(
          (projeto) => projeto.id == idProjeto.value
        ),
      });
      descricao.value = "";
    };

    return {
      descricao,
      idProjeto,
      projetos,
      finalizarTarefa,
    };
  },
};
</script>

<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
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
      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
