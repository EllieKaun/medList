<script setup lang="ts">
import TreatmentType from '@/shared/TreatmentType.vue';
import { ref } from 'vue';
import { useHomeStore } from '@/stores/home';
import CustomDatePicker from '@/shared/CustomDatePicker.vue';
import CustomButton from '@/shared/UI/CustomButton.vue';
import CustomText from '@/shared/UI/CustomText.vue';
import HomeTable from '@/shared/HomeTable.vue';


const {
    medicine,
    setCurrentMedicine,
    receptions,
    setCurrentReception,
    dose,
    setCurrentDose,
    times, 
    setCurrentTime,
    setStartDate, 
    setEndtDate, 
    setRangeDate,
    handleGenerateTable,
} = useHomeStore();

const displayedData = ref()

const handleShowData = () => {
    displayedData.value = handleGenerateTable()
}
</script>

<template>
    <div>
        <CustomText type="title">Лечение на дома</CustomText>
        <CustomText  class="subtitle" type="text">Лекарственные препараты</CustomText>
        <TreatmentType title="Лекарственные препараты" :data="medicine" :saveCurr="setCurrentMedicine">Спр "Препараты"</TreatmentType>
        <div class="content">
            <div>
                <CustomText class="subtitle" type="text">Путь приема</CustomText>
                <TreatmentType  title="Справочник 'Путь приема'" :data="receptions" :saveCurr="setCurrentReception">Путь приема</TreatmentType>
            </div>
            <div>
                <CustomText class="subtitle" type="text">Дозировка</CustomText>
                <TreatmentType title="Справочник 'Доза припората'" :data="dose" :saveCurr="setCurrentDose">Лекарственные препараты</TreatmentType>
            </div>
        </div>
        <div class="content">
            <div>
                <CustomText class="subtitle" type="text">Кратность приема</CustomText>
                <TreatmentType title="Справочник 'Кратность приема'" :data="times" :saveCurr="setCurrentTime">Кратность приема</TreatmentType>
            </div>
            <CustomDatePicker :setEndDate="setEndtDate" :setRangeDate="setRangeDate" :setStartDate="setStartDate"/>
        </div>
        <CustomButton class="button"  @click="handleShowData">Добавить</CustomButton>
        <HomeTable :data="displayedData"/>
    </div>
</template>

<style scoped lang="scss">
    .subtitle{
        margin-top: 18px;
        margin-bottom: 8px;
    }
    .content{
        display: flex;
    }
    .button{
        width: 200px;
        margin-bottom: 24px;
    }
</style>