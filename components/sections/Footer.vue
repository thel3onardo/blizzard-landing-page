<script setup>
const listItems = ref([
    { id: 1, icon: '/footer/1.svg', label: 'Seus jogos em um só lugar' },
    { id: 2, icon: '/footer/2.svg', label: 'Conecte-se aos seus amigos' },
    { id: 3, icon: '/footer/3.svg', label: 'Compare jogos e itens digitais' },
])
</script>

<template>
    <footer
        class="w-full bg-cover bg-center bg-no-repeat h-[800px] flex justify-center items-center overflow-hidden" 
        :style="{ backgroundImage: `url(${'/footer-background.png'})`}"
    >
        <NuxtLayout name="content">
            <div class="flex items-center h-full relative">
                <div class="flex flex-col w-2/4">
                    <div>
                        <img src="/logo-battle-net.png">
                    </div>
                    <h1 class="font-bold font-poppins text-white text-[2rem] my-6">Baixe agora o battle.net</h1>
                    <ul>
                        <li v-for="(item, index) in listItems" :key="item.id" class="flex items-center" :class="{ 'mb-6': (index + 1) !== listItems.length }">
                            <img :src="item.icon" class="mr-4">
                            <span class="text-lg text-gray-800">{{ item.label }}</span>
                        </li>
                    </ul>
                    <div class="flex flex-col w-fit">
                        <div class="my-10">
                            <Button class="px-8 py-3.5 flex items-center" background>
                                <Icon name="ic:baseline-apple" size="24px" class="mr-1.5" />
                                <span class="font-semibold text-base">Baixar para o MACOS</span>
                            </Button>
                        </div>
                        <div class="flex items-center text-white mt-3">
                            <Icon name="ic:round-phone-iphone" class="mr-4" size="24px" />
                            <h4 class="font-semibold leading-5 w-3/4">Também disponível como <span class="underline-offset-3">aplicativo móvel</span></h4>
                        </div>
                    </div>
                </div>
                <div class="absolute h-full w-full flex items-end" style="left: 30%">
                    <img src="/ilustrations/app.png" class="absolute top-0" />
                    <img src="/ilustrations/app-mini.png" class="relative left-1/4 bottom-0" />
                </div>
            </div>
        </NuxtLayout>
    </footer>
</template>