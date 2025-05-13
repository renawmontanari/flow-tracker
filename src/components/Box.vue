<script lang="ts">
export default {
  name: "Box",
};
</script>

<template>
  <div class="box has-text-weight-bold">
    <slot />
  </div>
</template>

<style scoped>
.box {
  background-color: rgb(82, 82, 82);
}
</style>
