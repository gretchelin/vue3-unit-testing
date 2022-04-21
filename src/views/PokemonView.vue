<script setup lang="ts">
import { onMounted, watchEffect, ref, defineProps } from "vue";
import { storeToRefs } from "pinia";
import { usePokemonStore } from "@/stores/pokemon";

// constants
const TABS = ["ability", "items", "game", "moves"];

// props
const props = defineProps<{
  id: number | string;
}>();

// stores
const store = usePokemonStore();
const { detail } = storeToRefs(store);
const { getPokemonDetail } = store;

// state
const activeTab = ref("ability");
const tabs = ref(TABS);

// computed

// watchers
watchEffect(() => {
  getPokemonDetail(props.id);
});

// methods
const getFormId = (url: string) => {
  const splitUrl = url?.split("/");
  const pokeId = url?.endsWith("/")
    ? splitUrl[splitUrl.length - 2]
    : splitUrl[splitUrl.length - 1];
  return pokeId;
};

// lifecycle
onMounted(() => {
  // getPokemonDetail(props.id);
});
</script>

<template>
  <main class="px-2 py-8 w-10/12 md:w-3/4 mx-auto">
    <div class="flex flex-row my-4">
      <img
        style="width: 15rem; height: auto"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`"
      />

      <div class="flex-1 px-4">
        <h1 class="text-2xl font-bold uppercase">{{ detail.name }}</h1>

        <div class="mt-4">
          <p>Base Experience: {{ detail.base_experience }}</p>
          <p>Height: {{ detail.height }}</p>
          <p>
            Forms:
            <router-link
              :to="`/pokemon/${getFormId(form.url)}`"
              v-for="form in detail.forms"
              :key="form.name"
              >{{ form.name }}</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <div class="border-b-2 my-4">
      <button
        :class="[
          'p-4 uppercase border-2 border-b-0',
          activeTab === tab
            ? 'border-orange-500 bg-orange-600 font-bold text-white'
            : '',
        ]"
        v-for="(tab, idx) in tabs"
        :key="idx"
        @click="activeTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div v-if="activeTab === tabs[0]">
      <div v-for="(ability, idx) in detail.abilities" :key="idx">
        <span>{{ ability.ability.name.replace("-", " ") }}</span>
      </div>
    </div>

    <div v-if="activeTab === tabs[1]">
      <div v-for="(item, idx) in detail.held_items" :key="idx">
        <img
          style="width: 4em; height: auto"
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${item.item.name}.png`"
        />

        <span>{{ item.item.name }}</span>
      </div>
    </div>

    <div v-if="activeTab === tabs[2]">
      <div v-for="(game, idx) in detail.game_indices" :key="idx">
        <span>{{ game.version.name }}</span>
      </div>
    </div>

    <div v-if="activeTab === tabs[3]">
      <div v-for="(move, idx) in detail.moves" :key="idx" class="p-2">
        <span>{{ move.move.name }}</span>
      </div>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
