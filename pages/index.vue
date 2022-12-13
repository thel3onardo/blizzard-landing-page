<script setup>
import Header from '../components/sections/Header.vue'
import Games from '../components/sections/Games.vue'

const { data : gamesReq } = await useFetch('/api/games');

</script>

<template>
    <Head>
        <Title>Blizzard</Title>
    </Head>

    <div class="w-full font-poppins bg-black">
        <Header />
        <Games :games="gamesReq.games" />
    </div>
</template>