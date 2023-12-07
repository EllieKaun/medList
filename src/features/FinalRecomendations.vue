<script setup lang="ts">
import CustomText from '@/shared/UI/CustomText.vue';
import CustomInput from '@/shared/UI/CustomInput.vue';
import { useRecomendationsStore } from '@/stores/recomendations';
import CustomButton from '@/shared/UI/CustomButton.vue';
import RecomendationsTable from '@/shared/RecomendationsTable.vue';
import { ref } from 'vue';

const { setRecomendations, 
       handleGenerateTable
    } = useRecomendationsStore();

const dataArr = ref<string[]>([]);
const dataValue = ref<string>('')

const handleUpdArr = (value: string) => {
    dataValue.value = value;
}
const handleAddItem = () => {
    dataArr.value.push(dataValue.value);
}
const handleDeleteItem = (i: number) => {
    dataArr.value.splice(i, 1);
}
const displayedData = ref()

const handleSave = () => {
    setRecomendations([...dataArr.value])
    displayedData.value = handleGenerateTable();
}

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();

const currDate = `${day}/${month}/${year} ${hours}:${minutes}`
</script>

<template>
    <div class="wrapper">
        <CustomText type="title" class="recomendationTitle">Рекомендации</CustomText>
        <div class="content">
            <CustomInput className="input"  :handleChange="handleUpdArr"/>
            <div class="plus" @click="handleAddItem"><span>+</span></div>
        </div>
        <div v-for="(item, i) in dataArr" :key="item">
            <div class="recomendationArrItem">
                <div>{{ item }}</div>
                <div class="plus" @click="handleDeleteItem(i)">-</div>
            </div>
        </div>

        <RecomendationsTable :data="displayedData"/>
        <div class="content">
            <p>{{ currDate }}</p>
            <p>ФИО врача</p>
            <p>Должность</p>
        </div>

        <CustomButton @click="handleSave">Сохранить назначение</CustomButton>
    </div>
</template>

<style scoped lang="scss">
    .wrapper{
        margin-top: 40px;
        margin-bottom: 24px;
    }
    .recomendationTitle{
        margin-bottom: 16px;
    }
    .content{
        display: flex;
        align-items: flex-end;
        gap: 10px;
    }
    .plus{
        border: 1px solid grey;
        font-size: 24px;
        font-weight: bold;
        padding: 2px 10px;
        cursor: pointer;
    }
    .recomendationArrItem{
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 8px;
    }
</style>