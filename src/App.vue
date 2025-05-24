<script lang="ts">
import BarraLateral from "./components/BarraLateral.vue";
import Notificacoes from "./components/Notificacoes.vue";

export default {
  name: "App",
  components: {
    BarraLateral,
    Notificacoes,
  },
  data() {
    return {
      modoClaroAtivo: false,
    };
  },
  methods: {
    trocarTema(modoClaroAtivo: boolean) {
      this.modoClaroAtivo = modoClaroAtivo;
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
      <Notificacoes />
      <router-view></router-view>
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
