<script setup lang="ts">
interface Props {
  currentPage?: number;
  totalPage?: number;
  showPrev?: boolean;
  showNext?: boolean;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

// props
const props = withDefaults(defineProps<Props>(), {
  currentPage: 1,
  totalPage: 1,
  showPrev: true,
  showNext: true,
});

const emit = defineEmits<{
  (e: "previous", id: number): void;
  (e: "next", value: string): void;
}>();
</script>

<template>
  <div>
    <button
            data-qa="btn-prev"
      class="p-2 text-blue-800 hover:underline"
      v-if="props.showPrev"
      @click="(e) => $emit('previous', e)"
    >
      Prev
    </button>
    <button
            class="p-2 text-slate-500" disabled>{{ props.currentPage }}</button>
    / {{ props.totalPage }}
    <button
            data-qa="btn-next"
      class="p-2 text-blue-800 hover:underline"
      v-if="props.showNext"
      @click="(e) => $emit('next', e)"
    >
      Next
    </button>
  </div>
</template>

<style scoped></style>
