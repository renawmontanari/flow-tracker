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
      <slot />
    </div>
  </div>
</template>
