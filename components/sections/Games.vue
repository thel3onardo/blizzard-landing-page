<script setup lang="ts">
const games = reactive([
    { id: 1, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 2, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 3, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 4, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' },
    { id: 5, title: 'Diablo II: Resurrected', genre: 'RPG de ação', imagePath: 'https://i.pinimg.com/736x/e4/67/80/e46780e610e1955cbef8113954f795c2.jpg' }
])
</script>

<template>
    <NuxtLayout name="content">
        <div class="flex flex-col">
            <div class="flex justify-between items-end text-white my-20">
                <h4 class="text-semibold">Games</h4>
                <h1 class="text-bold text-3xl">Jogos exclusivos</h1>
                <div class="flex text-blue-500">
                    <Icon name="radix-icons:drag-handle-dots-2" />
                    <span class="text-semibold">Ver todos os jogos</span>
                </div>
            </div>

            <div class="grid grid-cols-4 gap-8">
                <GameCard v-for="game in games" :key="game.id" :title="game.title" :genre="game.genre" :imagePath="game.imagePath" />
            </div>
        </div>
    </NuxtLayout>
</template>