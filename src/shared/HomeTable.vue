<script setup lang="ts">
const props = defineProps(['data']);
</script>

<template>
    <p>Лечение на дому</p>
    <div  class="wrapper">
        <div v-if="data">
            <p>{{ data.medicine }}</p>
            <p>{{ data.reception }}</p>
            <p>{{ data.dose }}</p>
            <p>с {{ data.startDate }} по {{ data.endDate }} </p>
            <p>{{ data.range }} дней</p>
        </div>
    </div>
</template>

<style scoped lang="scss">

    .wrapper{
        border: 1px solid;
        padding: 8px;
        min-height: 100px;
        p{
            font-size: 16px;
        }
    }
</style>