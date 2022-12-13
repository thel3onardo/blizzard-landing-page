<script setup lang="ts">
const headerItems = reactive([
    { id: 1, path: '/banner-hero/icons/game-1.png' }, { id: 2, path: '/banner-hero/icons/game-2.png' }, { id: 3, path: '/banner-hero/icons/game-3.png' }, { id: 4, path: '/banner-hero/icons/game-4.png' }, { id: 5, path: '/banner-hero/icons/game-5.png' }
])
</script>

<template>
    <div 
        :style="{ backgroundImage: `url('/banner-hero/games/diablo-bg.png')` }" class="flex flex-col w-full max-h-[736px] h-screen bg-no-repeat bg-top header-bg z-10 relative"
    >
        <NavBar />
        <NuxtLayout name="content">
            <div class="flex items-center justify-between w-full relative z-30 mt-12">
                <div class="flex">
                    <ul class="flex flex-col justify-center mr-40">
                        <li class="h-12 w-12 mb-5" v-for="item in headerItems" :key="item.id">
                            <img :src="item.path" class="h-full w-full">
                        </li>
                    </ul>
                    <div class="flex flex-col text-white max-w-[560px]">
                        <h1 class="text-[4rem] font-bold leading-[70px]">Retorne à escuridão com o game Diablo IV</h1>
                        <p class="my-4 text-lg">O retorno de Lilith traz uma era de escuridão e sofrimento</p>
                        <div>
                            <Button class="mt-4 px-8 py-4" background>Jogue agora</Button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-between">
                    <img src="/banner-hero/games/diablo-logo.png">
                    <div class="flex flex-col items-end mt-20">
                        <p class="text-sm text-white font-semibold uppercase mb-4">assista o trailer</p>
                        <div class="w-[280px] h-[158px]">
                            <img src="/banner-hero/games/diablo-animation-cover.png" class="h-full w-full">
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.header-bg::before {
    content: '';
    position: absolute;
    z-index: 20;
    width: 100%;
    height: 100%;
    background: radial-gradient(73.1% 73.1% at 52.6% 25.14%, rgba(2, 2, 3, 0.5) 0%, #020203 71.1%);
    opacity: 0.8;
}
</style>