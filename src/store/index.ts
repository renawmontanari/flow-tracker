import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import {
  ADICIONA_PROJETO,
  ATUALIZA_PROJETO,
  EXCLUIR_PROJETO,
} from "./tipo-mutacoes";
import { INotificacao, TipoNotificacao } from "@/interfaces/INotificacoes";

interface Estado {
  projetos: IProjeto[];
  notificacoes: INotificacao;
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: [
      {
        id: 1,
        texto: "Projeto adicionado com sucesso!",
        titulo: "sucesso",
        tipo: TipoNotificacao.SUCESSO,
      },
      {
        id: 2,
        texto: "Projeto atualizado com sucesso!",
        titulo: "atencao",
        tipo: TipoNotificacao.ATENCAO,
      },
      {
        id: 3,
        texto: "Projeto excluído com sucesso!",
        titulo: "falha",
        tipo: TipoNotificacao.FALHA,
      },
    ],
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
    },
    [ATUALIZA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj) => proj.id == projeto.id);
      state.projetos[index] = projeto;
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter((proj) => proj.id != id);
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
