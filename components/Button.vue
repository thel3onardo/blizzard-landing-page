<script setup lang="ts">
    const props = defineProps({
        background: {
            type: Boolean,
            required: false,
            default: false,
        }
    })
    onMounted(() => {
        console.log(props)
    })
</script>

<template>
    <button 
        :class="props.background ? 'bg-blue-500' : 'bg-transparent border border-white'"
        class="text-white text-sm font-medium  rounded-[3px]"
    >
        <slot></slot>
    </button>
</template>