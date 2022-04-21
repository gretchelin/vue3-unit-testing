<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header
    :class="[
      'w-full p-2 flex h-14 items-center fixed top-0 left-0',
      $style.header,
    ]"
  >
    <div class="px-2 h-10">
      <img
              data-qa="logo"
        class="w-auto h-full"
        src="https://pokeapi.co/static/pokeapi_256.3fa72200.png"
      />
    </div>

    <div class="flex flex-1 px-2 items-center">
      <nav class="flex flex-1 items-center justify-end">
        <RouterLink
          class="p-2"
          active-class="text-yellow-500 border-b-4 border-yellow-500"
          to="/"
          >Pokemons</RouterLink
        >
      </nav>
    </div>
  </header>
</template>

<style module>
.header {
  background: white;
}
</style>
