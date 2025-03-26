<script setup lang="ts">
import styles from './Ghost.module.css';
</script>

<template>
  <div :class="styles.ghostContainer">
    <div :class="styles.ghost">
      <div :class="styles.face"></div>
      <div :class="styles.bottom">
        <div
          v-for="i in 5"
          :key="i"
          :class="`circle circle-${i}`"
        ></div>
      </div>
    </div>
  </div>
</template>
