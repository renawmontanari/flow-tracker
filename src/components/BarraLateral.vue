<script lang="ts">
export default {
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      modoClaroAtivo: false,
    };
  },
  computed: {
    textoBotao() {
      if (this.modoClaroAtivo) {
        return "Desativar modo escuro";
      }
      return "Ativar modo escuro";
    },
  },
  methods: {
    alterarTema() {
      this.modoClaroAtivo = !this.modoClaroAtivo;
      this.$emit("aoTemaAlterado", this.modoClaroAtivo);
    },
  },
};
</script>

<template>
  <header>
    <h1>
      <img class="img-logo" src="../assets/logo.png" alt="logo" />
    </h1>
    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  background: rgb(82, 82, 82);
  width: 100%;
  height: 100vh;
  text-align: center;
}

.img-logo {
  border-radius: 10px;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
