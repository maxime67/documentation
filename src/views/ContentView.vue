<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  data: any[] | null;
  loading: boolean | null;
  error: string | null;
}>();
</script>

<template>
  <div v-if="loading" class="grid grid-cols-4 gap-4 p-6">
    <div v-for="item in data" :key="item.id">
      <a
        :href="item.url"
        class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {{ item.title }}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {{ item.description }}
        </p>
        <div class="grid grid-cols-4">
          <div  v-for="tag in item.tags" :key="tag.id">
            <img class="rounded-md " :src="`../logo/${tag}.png`">
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
