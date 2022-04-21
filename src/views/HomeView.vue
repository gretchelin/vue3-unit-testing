<script setup lang="ts">
import { onMounted, computed, watchEffect, ref } from "vue";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";
import Pagination from "@/components/Pagination/Pagination.vue";

// constants
const MAX_PER_PAGE = 24;

// stores
const store = usePokemonStore();
const { pokemons, total, loading } = storeToRefs(store);
const { getPokemonList } = store;

// state
const currentPage = ref(1);

// computed
const totalPage = computed(() => Math.ceil(total.value / MAX_PER_PAGE));

// watchers
watchEffect(() => {
  getPokemonList({
    limit: MAX_PER_PAGE,
    offset: (currentPage.value - 1) * MAX_PER_PAGE,
  });
});

// methods
const onPrev = (e: Event) => {
  e.preventDefault();

  currentPage.value = currentPage.value - 1;
};
const onNext = (e: Event) => {
  e.preventDefault();

  currentPage.value = currentPage.value + 1;
};

// lifecycle
onMounted(() => {
  getPokemonList({
    limit: MAX_PER_PAGE,
    offset: (currentPage.value - 1) * MAX_PER_PAGE,
  });
});
</script>

<template>
  <main class="px-2 py-8 w-10/12 md:w-3/4 mx-auto">
    <div class="flex flex-wrap mb-4">
      <div
        v-for="(pokemon, index) in pokemons"
        :key="index"
        class="border border-gray-100 w-1/3 lg:w-2/12 sm:w-4/12 py-2 flex flex-col items-center"
      >
        <router-link :to="`/pokemon/${pokemon.id}`">
          <div class="w-3/4 px-2 pb-2">
            <img class="w-full inline-block" :src="pokemon.art" />
          </div>
          <p class="flex-1 px-2 text-center text-md uppercase">
            {{ pokemon.name }}
          </p>
        </router-link>
      </div>
    </div>

    <Pagination
      :show-prev="currentPage > 1"
      :show-next="currentPage < totalPage"
      :current-page="currentPage"
      :total-page="totalPage"
      @previous="onPrev"
      @next="onNext"
    />
  </main>
</template>
