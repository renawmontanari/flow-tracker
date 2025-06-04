import ITarefa from "@/interfaces/ITarefa";
import { Estado } from "@/store";
import {
  ALTERAR_TAREFA,
  CADASTRAR_TAREFAS,
  OBTER_TAREFAS,
} from "@/store/tipo-acoes";
import {
  ADICIONA_TAREFA,
  ALTERAR_TAREFAS,
  DEFINIR_TAREFA,
} from "@/store/tipo-mutacoes";
import { Module } from "vuex";
import http from "@/http";

export interface EstadoTarefa {
  tarefas: ITarefa[];
}

export const tarefa: Module<EstadoTarefa, Estado> = {
  state: {
    tarefas: [],
  },
  mutations: {
    [DEFINIR_TAREFA](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas;
    },
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa);
    },
    [ALTERAR_TAREFAS](state, tarefa: ITarefa) {
      const index = state.tarefas.findIndex((proj) => proj.id == tarefa.id);
      state.tarefas[index] = tarefa;
    },
  },
  actions: {
    [OBTER_TAREFAS]({ commit }) {
      http
        .get("tarefas")
        .then((resposta) => commit(DEFINIR_TAREFA, resposta.data));
    },
    [CADASTRAR_TAREFAS]({ commit }, tarefa: ITarefa) {
      return http
        .post("/tarefas", tarefa)
        .then((resposta) => commit(ADICIONA_TAREFA, resposta.data));
    },
    [ALTERAR_TAREFA]({ commit }, tarefa: ITarefa) {
      return http
        .put(`/tarefas/${tarefa.id}`, tarefa)
        .then(() => commit(ALTERAR_TAREFA, tarefa));
    },
  },
};
