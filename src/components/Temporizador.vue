<script lang="ts">
import Cronometro from "./Cronometro.vue";

export default {
  name: "Temporizador",
  components: {
    Cronometro,
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
    },
  },
};
</script>

<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <button
      class="button"
      @click="iniciarContagem"
      :disabled="cronometroRodando"
    >
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button
      class="button"
      @click="finalizarContagem"
      :disabled="!cronometroRodando"
    >
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>
