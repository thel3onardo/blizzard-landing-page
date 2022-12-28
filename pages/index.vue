<script setup>
import Header from '../components/sections/Header.vue'
import Games from '../components/sections/Games.vue'
import Footer from '../components/sections/Footer.vue'

</script>

<template>
    <Head>
        <Title>Blizzard</Title>
    </Head>

    <div class="w-full font-poppins bg-black">
        <Header />
        <Games />
        <Footer />
    </div>
</template>