<script lang="ts">
export default {
  name: "Modal",
  props: {
    mostrarModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div class="modal" :class="{ 'is-active': mostrarModal }" v-if="mostrarModal">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head"><slot name="cabecalho" /></header>
      <section class="modal-card-body"><slot name="corpo" /></section>
      <footer class="modal-card-foot"><slot name="rodape" /></footer>
    </div>
  </div>
</template>
