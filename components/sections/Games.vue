<script setup>
const appConfig = useAppConfig();
const { pending, data } = await useFetch(appConfig?.api?.games, { method: 'GET' });
</script>

<template>
    <template v-if="pending">
        <p>pending</p>
    </template>
    <NuxtLayout name="content" v-else>
        <div class="flex flex-col">
            <div class="flex justify-between items-end text-white my-20">
                <h4 class="text-semibold">Games</h4>
                <h1 class="text-bold text-3xl">Jogos exclusivos</h1>
                <div class="flex items-center text-blue-500">
                    <Icon name="radix-icons:drag-handle-dots-2" />
                    <span class="extt-semibold ml-2">Ver todos os jogos</span>
                </div>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-3 gap-8 mb-20">
                <GameCard v-for="{ name, category, image, logo } in data" :key="name" :title="name" :category="category" :background="image" :logo="logo" />
                <div class="w-full lg:max-h-[400px] border-[1.5px] rounded flex flex-col justify-center items-center">
                    <div>
                        <img src="/logo-blizzard.png" />
                    </div>
                    <div class="text-white flex items-center mt-8">
                        <Icon name="radix-icons:drag-handle-dots-2" />
                        <p class="font-semibold ml-2">Ver todos os jogos</p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>