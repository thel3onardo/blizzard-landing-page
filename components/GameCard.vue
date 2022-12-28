<script setup lang="ts">
    const prop = defineProps({
        title: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            required: true,
        },
        background: {
            type: String,
            required: true,
        }
    })
</script>

<template>
  <div class="flex flex-col text-white group">
    <div class="w-full rounded-lg overflow-hidden lg:max-h-[400px] relative">
        <img :src="background" class="w-full h-full object-cover group-hover:scale-110 group-hover:cursor-pointer game-card__img transition duration-500 delay-50 relative">
        <div class="absolute bottom-9 w-full flex justify-center">
            <img :src="logo" >
        </div>
    </div>
    <h2 class="font-semibold text-lg mt-6 group-hover:text-blue-500">{{ title }}</h2>
    <p class="font-normal text-sm opacity-80 mt-1">{{ category }}</p>
  </div>
</template>