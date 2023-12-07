<script lang="ts" setup>
import CustomText from './UI/CustomText.vue';
const props = defineProps(['data']);

const columns = [
    { title: 'Лекарственный препарат', dataIndex: 'medicine' },
    { title: 'Путь приема', dataIndex: 'howToUse' },
    { title: 'Дозировка', dataIndex: 'dose' },
    { title: 'Начало приема', dataIndex: 'startDate' },
    { title: 'Конец приема', dataIndex: 'endDate' },
    { title: 'Номер сеанса', dataIndex: 'session' },
    { title: 'Дней', dataIndex: 'days' },
];
</script>

<template>
    <CustomText class="tableTitle" type="title">Список назначений после сеанса</CustomText>
    <div id="components-table-demo-size">
        <a-table :columns="columns" :data-source="data" size="middle" :pagination="false" />
    </div>
</template>

<style scoped lang="scss">
.tableTitle{
    margin-bottom: 8px;
}
</style>

