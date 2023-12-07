<script setup lang="ts">
    import CustomText from '../shared/UI/CustomText.vue';
    import CustomCheckbox from '../shared/UI/CustomCheckbox.vue';
    import CustomInput from '../shared/UI/CustomInput.vue';
    import CustomButton from '@/shared/UI/CustomButton.vue';
    import { useTreatmentStore } from '../stores/treatment'
    import TreatmentTable from '../shared/TreatmentTable.vue'
    import TreatmentType from '@/shared/TreatmentType.vue';
    import { ref } from 'vue';

    const { 
        program, 
        currentProgram, 
        setCurrentProgram,
        diasol,
        setCurrentDiasol,
        concentrator, 
        setCurrentConcentrator,
        type,
        setCurrentType,
        currentType,
        needlesArr,
        setVolume,
        setNeedle,
        needleTypeArr,
        setNeedleType,
        carterArr,
        setCarter,   
        carterTypeArr,
        setCarterType,
        bicarbonate,
        setCurrentBicarbonate,
        anticoagulant,
        setCurrentAnticoagulant,
        setHumanVolume,
        setextraVolume,
        handleGenerateTable
    } = useTreatmentStore();

    const today = new Date();
    let month = today.getMonth() + 1;

    const displayedData = ref();

    const handleShowData = () => {
        displayedData.value = handleGenerateTable();
    }
</script>

<template>
    <div>
        <div class="session">
            <CustomText type="title">Сеанс гемодиализа</CustomText>
            <CustomText class="sessionMonth" type="text">№ месяца:{{ month }}</CustomText>
        </div>
        <div class="gemoSession">
            <CustomText type="title">Назначение сеанса гемодиализа</CustomText>
            <CustomText type="text" class="gemoSubTitle">Программа аппарата</CustomText>
            <CustomCheckbox 
                :options="program"
                :defultValue="currentProgram"
                :action="setCurrentProgram"
            />
        </div>
        <div class="sessionData">
                <CustomText  class="subtitle" type="text">Диализатор</CustomText>
                <TreatmentType  title="Диализаторы" :data="diasol" :saveCurr="setCurrentDiasol">Диализатор</TreatmentType>
            <div class="sessionDataVolume">
                <div>
                <CustomText class="subtitle" type="text">Концентратор</CustomText>
                <TreatmentType  title="Концентраторы" :data="concentrator" :saveCurr="setCurrentConcentrator">Концентратор</TreatmentType>
                </div>
                <div class="sessionDataExtra">
                    <CustomInput placeholder="10 л." :handleChange="setVolume">Объем л.</CustomInput>
                </div>
            </div>
        </div>
        <div class="sessionType">
            <CustomText type="text">Тип инъекции</CustomText>
            <CustomCheckbox 
                class="sessionTypeCheckbox"
                :options="type"
                :defultValue="currentType"
                :action="setCurrentType"
            />
            <div v-if="currentType === '1'" class="sessionTypeContent">
                <TreatmentType title="Лекарственные препараты" :data="needlesArr" :saveCurr="setNeedle">Спр "Иглы"</TreatmentType>
                <TreatmentType title="Иглы" :data="needleTypeArr" :saveCurr="setNeedleType">Спр "Типы иглы"</TreatmentType>
            </div>
            <div v-else class="sessionTypeContent">
                <TreatmentType title="Лекарственные препараты" :data="carterArr" :saveCurr="setCarter">Спр "Катетеры"</TreatmentType>
                <TreatmentType title="Справочник 'Катетеры'" :data="carterTypeArr" :saveCurr="setCarterType">Спр "Типы катетеров"</TreatmentType>
            </div>
        </div>
        <div class="personInfo">
            <div>
                <CustomText class="subtitle" type="text">Диализатор</CustomText>
                <TreatmentType title="Справочник 'Бикорбанат'" :data="bicarbonate" :saveCurr="setCurrentBicarbonate">ХХХ гр/л.</TreatmentType>
            </div>
            <CustomInput :handleChange="setHumanVolume" placeholder="XXX кг.">Сухой вес пациента</CustomInput>
            <div>
                <CustomText  class="subtitle" type="text">Диализатор</CustomText>
                <TreatmentType title="Справочник 'Антикоагуляция'" :data="anticoagulant" :saveCurr="setCurrentAnticoagulant">Антикоагуляция</TreatmentType>
            </div>
            <CustomInput :handleChange="setextraVolume" placeholder="XXX ед.">Объем</CustomInput>
        </div>
        <CustomButton  @click="handleShowData">Сформировать сеанс</CustomButton>
        <TreatmentTable :data="displayedData" class="table"/>
    </div>
</template>

<style scoped lang="scss">
.session{
    display: flex;
    align-items: center;
    widows: 100%;
    .sessionMonth{
        margin-left: 20%;
    }
}
.gemoSession{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
    .gemoSubTitle{
        margin-top: 20px;
        margin-bottom: 8px;
    }
}
.sessionData{
    display: flex;
    flex-direction: column;
    margin-bottom: 36px;
    .sessionDataItem{
        margin-top: 8px;
        margin-right: 20px;
    }
    .sessionDataVolume{
        display: flex;
        align-items: flex-end;
        margin-top: 20px;
    }
    .sessionDataExtra{
        display: flex;
        flex-direction: column;
    }
}
.sessionType{
    margin-bottom: 36px;
    .sessionTypeCheckbox{
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .sessionTypeContent{
        display: flex;
    }
}
.personInfo{
    display: flex;
    gap: 8px;
    margin-bottom: 36px;
    align-items: flex-end;
}
.table{
    margin-top: 40px;
}
.subtitle{
    margin-bottom: 8px;
}
</style>