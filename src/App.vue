<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-gray-200 flex">
      <div class="p-2 w-full bg-gray-800">
        <div class="p-6 text-gray-700 bg-gray-900 rounded-lg shadow-lg">
          <span class="px-1 color hover:text-red-600 cursor-pointer">
            <i class="fas fa-stream p-2 bg-gray-800 rounded-full"> Apache </i>
          </span>
          <span class="px-1 hover:text-white cursor-pointer">
            <i class="fas fa-search p-2 bg-gray-800 rounded-full"> Nginx </i>
          </span>
          <span class="px-1 hover:text-white cursor-pointer">
            <i class="fas fa-th p-2 bg-gray-800 rounded-full"> SMTP </i>
          </span>
          <span class="px-1 hover:text-white cursor-pointer">
            <i class="w-8 fas fa-calendar-alt p-2 bg-gray-800 rounded-full">
              Symfony
            </i>
          </span>
          <span class="px-1 hover:text-white cursor-pointer w-8 relative">
            <i class="fas fa-bell p-2 bg-gray-800 rounded-full"> Vue.js </i>
          </span>
          <span
            class="hover:text-white cursor-pointer w-10 relative float-right mr-3"
          >
            <i class="fas fa-user p-2 bg-gray-800 rounded-full">
            News</i>
          </span>
        </div>
      </div>
  </div>

  <RouterView />
</template>

<style scoped></style>
