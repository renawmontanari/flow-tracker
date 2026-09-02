# FlowTracker

> Gerenciador de tarefas com cronômetro: registra quanto tempo cada atividade
> consumiu e agrupa o histórico por projeto.

**[Ver ao vivo](https://flow-tracker.vercel.app)** · `Vue 3` `TypeScript` `Vuex` `Vue Router` `Vite`

---

## O problema

Lista de tarefas responde "o que falta", mas não responde "onde meu tempo foi".
Para quem cobra por hora ou precisa estimar melhor, a segunda pergunta é a que
importa. O FlowTracker junta as duas coisas: a tarefa e o tempo real que ela levou.

## Decisões de arquitetura

**Store fatiada em módulos por domínio.**
`store/modulos/projeto` e `store/modulos/tarefa`, com `tipo-acoes.ts` e
`tipo-mutacoes.ts` centralizando as constantes. Vuex sem essa disciplina vira um
objeto gigante em que ninguém rastreia mais quem mutou o quê; com módulo e
constante tipada, o autocomplete vira documentação.

**Sistema de notificação como preocupação separada.**
Um hook `notificador` e um componente `Notificacoes` isolam o aviso ao usuário.
Nenhuma tela precisa saber renderizar toast — ela só emite o evento.

**Cronômetro e temporizador como componentes distintos.**
`Cronometro` conta, `Temporizador` orquestra início e parada. Separar contagem de
controle mantém os dois testáveis.

## Rodando localmente

O projeto consome uma API REST local. O `db.json` na raiz serve de base para
`json-server`.

```bash
git clone https://github.com/renawmontanari/flow-tracker.git
cd flow-tracker
npm install
npx json-server --watch db.json --port 3000   # em um terminal
npm run dev                                   # em outro
```

## O que eu faria diferente

**A URL da API está fixa em `http://localhost:3000`.** É o motivo de a versão
publicada na Vercel não carregar dado nenhum: o navegador do visitante procura um
servidor na máquina dele. Deploy que aponta para `localhost` é deploy que engana
quem abre o link — corrigir isso com `VITE_API_URL` é a primeira coisa a fazer
aqui.

**`reatividade.js` na raiz é arquivo de estudo esquecido.** Não pertence ao
projeto.

**Vuex é a escolha datada.** Em Vue 3 hoje eu usaria Pinia: menos cerimônia,
tipagem melhor e sem a separação artificial entre action e mutation.

**Sem persistência real.** `json-server` resolve o protótipo; um backend de
verdade seria o passo seguinte — e existe um pronto neste perfil, em
[pulseBackend](https://github.com/renawmontanari/pulseBackend).

## Licença

MIT
