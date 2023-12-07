<script setup lang="ts">
    const props = defineProps(['type']);
</script>

<template>
    <p :class="{text: type === 'text', title: type === 'title', block: type === 'block'}">
        <slot></slot>
    </p>
</template>

<style scoped lang="scss">
    p{
        width: max-content;
        margin: 0;
    }
    .text{
        font-size: 14px;
    }
    .title{
        font-size: 18px;
    }
    .block{
        border: 1px solid;
        padding: 4px 24px 4px 0;
        font-size: 16px;

    }
</style>