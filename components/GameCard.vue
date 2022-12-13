<script setup lang="ts">
    const prop = defineProps({
        title: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        imagePath: {
            type: String,
            required: true,
        }
    })
</script>

<template>
  <div class="flex flex-col text-white">
    <div class="w-full rounded-lg overflow-hidden">
        <img :src="imagePath" class="w-full h-full">
    </div>
    <h2 class="font-semibold text-lg mt-6">{{ title }}</h2>
    <p class="font-normal text-sm opacity-80 mt-1">{{ genre }}</p>
  </div>
</template>