<script setup lang="ts">
    const props = defineProps(['data']);

</script>

<template>
    <div class="wrapper">
        <div v-if="data"> 
            <p>Назначение сеанаса гемодиализа</p>
            <div class="contentWrapper">
                <p>{{ data.program }} - Программа</p>
                <p>{{ data.diasol }} - Диализатор</p>
                <p>{{ data.concentrator }} объем {{ data.volume }}</p>
                <p>-{{ data.type }}</p>
                <p>{{  data.bicarbonate }} - Бикорбанат</p>
                <p>{{  data.anticoagulant }} - Антикоагуляция</p>
                <p>{{  data.humanVolume }} - Сухой вес кг.</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .wrapper{
        border: 1px solid;
        padding: 8px;
        min-height: 100px;
        p{
            font-weight: bold;
            font-size: 16px;
        }
        .contentWrapper{
            display: flex;
            flex-wrap: wrap;
            gap: 14px;
        }
    }
</style>