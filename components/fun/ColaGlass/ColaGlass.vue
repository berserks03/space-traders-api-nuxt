<script setup lang="ts">
import styles from './ColaGlass.module.css';
</script>

<template>
  <div :class="styles.container">
    <div :class="styles.glass">
      <div :class="styles.ovalTopFront"></div>
      <div :class="styles.straw"></div>
      <div :class="styles.ovalBottomBack"></div>
      <div :class="styles.liquid"></div>
      <div
        v-for="i in 20"
        :key="i"
        :class="i <= 8 ? styles.iceCube : styles.bubble"
      ></div>
    </div>
  </div>
</template>
