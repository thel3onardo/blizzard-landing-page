<script setup lang="ts">
const state = reactive({
   navItems: [{ name: 'Jogos' }, { name: 'Esportes' }, { name: 'Loja' }, { name: 'Notícias' }, { name: 'Suporte' }]
})
</script>

<template>
    <div class="w-full bg-transparent sticky z-40 border-b-[1.5px] border-white/10">
        <NuxtLayout name="content">
            <div class="flex justify-between py-7 px-5 relative navbar-border-bottom">
                <div class="flex items-center">
                    <div class="lg:mr-32">
                        <img src="~/assets/logo-blizzard.png">
                    </div>
                    <ul class="flex">
                        <li 
                            v-for="item in state.navItems" 
                            :key="item.name"
                            class="font-medium mx-[34px] text-white"
                        >
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="flex">
                    <Button class="px-4 py-2 mr-4">Criar conta</Button>
                    <Button class="px-6 py-2" background>Logar</Button>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>

<style scoped>
.navbar-border-bottom::before {
    content: '';
    position: absolute;
    bottom: -2px;
    width: 3%;
    height: 2px;
    background-color: #00AEFF;
}
</style>