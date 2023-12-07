<script lang="ts" setup>
import { ref, watch } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import CustomText from './UI/CustomText.vue';


const props = defineProps(['setStartDate', 'setEndDate', 'setRangeDate']);

const dateFormat = 'DD/MM/YYYY';
const value1 = ref<Dayjs>(dayjs('01/01/2015', dateFormat));
const value2 = ref<Dayjs>(dayjs('01/01/2015', dateFormat));
const diffDays = ref<number>()

const hadnleDifference = () => {
    const diff = value2.value.diff(value1.value)
    diffDays.value = (diff / (1000 * 60 * 60 * 24)) > 0 ? (diff / (1000 * 60 * 60 * 24)) : 0;
    props.setRangeDate(diffDays.value)
}

watch([value1, value2], (newValues) => {
    if(newValues[0] && newValues[1]){
        hadnleDifference()
    }
    props.setStartDate(newValues[0].format(dateFormat))
    props.setEndDate(newValues[1].format(dateFormat))
})

</script>

<template>
    <a-space  direction="vertical" :size="12">
        <div class="wrapper">
            <div>
                <CustomText class="subtitle" type="text">Начало приема</CustomText>
                <a-date-picker v-model:value="value1" :format="dateFormat"/>
            </div>
            <div>
                <CustomText class="subtitle" type="text">Конец приема</CustomText>
                <a-date-picker v-model:value="value2" :format="dateFormat"/>
            </div>
            <div>Количество {{ diffDays }}</div>
        </div>
    </a-space>
</template>

<style scoped lang="scss">
    .wrapper{
        display: flex;
        gap: 8px;
        align-items: flex-end;
        margin-bottom: 40px;
    }
    .subtitle{
        margin-top: 18px;
        margin-bottom: 8px;
    }
</style>