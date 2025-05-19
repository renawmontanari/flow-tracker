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
    <div class="has-text-centered">
      <button class="button" @click="alterarTema">{{ textoBotao }}</button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link"
            ><i class="fas fa-tasks m-2"></i>Tarefas</router-link
          >
        </li>
        <li>
          <router-link to="/projetos" class="link"
            ><i class="fas fa-folder m-2"></i>Projetos</router-link
          >
        </li>
      </ul>
    </nav>
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

.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
