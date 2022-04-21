import { defineStore } from "pinia";
import { getPokemonDetail, getPokemons } from "@/api/Pokemons";

interface RootState {
  pokemons: Record<string, any>[];
  detail: Record<string, any>;
  total: number;
  loading: boolean;
  error: string | null;
}

export const usePokemonStore = defineStore("pokemon", {
  state: (): RootState => ({
    pokemons: [],
    detail: {},
    total: 0,
    loading: false,
    error: null,
  }),
  actions: {
    async getPokemonList(params: { limit: number; offset: number }) {
      try {
        const res = await getPokemons(params);

        const { count, results } = res?.data || {};

        this.pokemons = results.map(
          (e: Record<string, string>, idx: number) => {
            const urlSplit = e.url?.split("/");
            const pokeId = urlSplit[urlSplit.length - 2];
            return {
              ...e,
              id: pokeId,
              art: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`,
            };
          }
        );
        this.total = count;
      } catch (e) {
        if (e instanceof Error) {
          this.error = e?.message;
        } else {
          this.error = "Something went wrong";
        }
      } finally {
        this.loading = false;
      }
    },
    async getPokemonDetail(id: number|string) {
      try {
        const res = await getPokemonDetail(id);

        this.detail = res?.data || {};
      } catch (e) {
        if (e instanceof Error) {
          this.error = e?.message;
        } else {
          this.error = "Something went wrong";
        }
      } finally {
        this.loading = false;
      }
    },
  },
});
