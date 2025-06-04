import ITarefa from "@/interfaces/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import {
  ADICIONA_TAREFA,
  ALTERAR_TAREFAS,
  DEFINIR_TAREFA,
  NOTIFICAR,
} from "./tipo-mutacoes";
import { INotificacao } from "@/interfaces/INotificacoes";
import { ALTERAR_TAREFA, CADASTRAR_TAREFAS, OBTER_TAREFAS } from "./tipo-acoes";
import http from "@/http";
import { EstadoProjeto, projeto } from "./modulos/projeto";

export interface Estado {
  tarefas: ITarefa[];
  notificacoes: INotificacao[];
  projeto: EstadoProjeto;
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    tarefas: [],
    notificacoes: [],
    projeto: {
      projetos: [],
    },
  },
  mutations: {
    [DEFINIR_TAREFA](state, tarefas: ITarefa[]) {
      state.tarefas = tarefas;
    },
    [NOTIFICAR](state, novaNotificacao: INotificacao) {
      novaNotificacao.id = new Date().getTime();
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter(
          (notificacao) => notificacao.id !== novaNotificacao.id
        );
      }, 3000);
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
  modules: {
    projeto,
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
