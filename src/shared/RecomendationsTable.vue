<script setup lang="ts">
const props = defineProps(['data']);

</script>

<template>
    <div class="wrapper">
        <div v-if="data">
            <div v-for="(item) in data.recomendations" :key="item">
                <p>{{ item }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    border: 1px solid;
    padding: 8px;
    min-height: 100px;

    p {
        font-size: 16px;
    }
}
</style>