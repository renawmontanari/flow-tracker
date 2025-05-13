<script lang="ts">
export default {
  name: "Box",
  data() {
    return {
      estilos: {
        backgroundColor: "#636363",
      },
    };
  },
};
</script>

<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot />
  </div>
</template>
