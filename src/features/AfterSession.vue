<script setup lang="ts">
import TreatmentType from '@/shared/TreatmentType.vue';
import RangeNums from '@/shared/RangeNums.vue';
import AfterTable from '@/shared/AfterTable.vue';
import CustomDatePicker from '@/shared/CustomDatePicker.vue';
import { useAfterStore } from '@/stores/after';
import CustomButton from '@/shared/UI/CustomButton.vue';
import CustomText from '@/shared/UI/CustomText.vue';
import { ref } from 'vue';

const {
    receptions, 
    dose, 
    setCurrentReception, 
    setCurrentDose,
    medicine,
    setCurrentMedicine,
    setStartDate,
    setEndtDate,
    setRangeDate,
    createTableRow,
    } = useAfterStore();

    interface IData {
        medicine: string;
        howToUse: string;
        dose: string;
        startDate: string;
        endDate: string;
        session: number;
        days: string;
    }
    const tableData = ref<IData[]>([])

    const handleClick = () => {
        console.log(createTableRow(), '123')
        tableData.value.push(createTableRow())
    }

</script>

<template>
    <div class="wrapper">
        <CustomText type="title">Назначение после сеанса</CustomText>
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
        <CustomText class="subtitle" type="text">Номер сеансов</CustomText>
        <RangeNums />
        <CustomDatePicker :setEndDate="setEndtDate" :setRangeDate="setRangeDate" :setStartDate="setStartDate"/>
        <CustomButton class="button" @click="handleClick">Сформировать</CustomButton>
        <AfterTable :data="tableData"/>
    </div>
</template>

<style scoped lang="scss">
    .wrapper{
        margin-top: 40px;
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
    }
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