<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/Header/Header.vue";
</script>

<template>
  <Header />

  <div class="pt-14">
    <RouterView />
  </div>
</template>
