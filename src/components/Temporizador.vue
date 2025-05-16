<script lang="ts">
import Botao from "./Botao.vue";
import Cronometro from "./Cronometro.vue";

export default {
  name: "Temporizador",
  emits: ["aoTemporizadorFinalizado"],
  components: {
    Cronometro,
    Botao,
  },
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciarContagem() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1;
      }, 1000);
    },

    finalizarContagem() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro);
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
};
</script>

<template>
  <section
    class="is-flex is-align-items-center is-justify-content-space-between"
  >
    <i class="fas fa-clock"></i>
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <Botao
      @clicado="iniciarContagem"
      icone="fas fa-play"
      texto="play"
      :desabilitado="cronometroRodando"
    />
    <Botao
      @clicado="finalizarContagem"
      icone="fas fa-stop"
      texto="stop"
      :desabilitado="!cronometroRodando"
    />
  </section>
</template>
