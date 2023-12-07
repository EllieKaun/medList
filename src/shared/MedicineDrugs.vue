<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from './UI/CustomInput.vue';
const props = defineProps(['data', 'saveCurr']);

const dataArr = ref<string[]>([...props.data]);
const dataValue = ref<string>('');
const contentArr = ref<string[]>(dataArr.value);

const handleUpdArr = (value: string) => {
    dataValue.value = value;
}

const handleAddItem = () => {
    dataArr.value.push(dataValue.value);
}

const handleDeleteItem = (i: number) => {
    dataArr.value.splice(i, 1);
}

const handleSearch = (value: string) => {
    contentArr.value = dataArr.value.filter(item => item.toLowerCase().includes(value.toLowerCase()));
}

const handleClick = (value: string) => {
    props.saveCurr(value);
    alert(`${value} выбран`)
}
</script>

<template>
    <div class="wrapper">
        <div class="block">
            <CustomInput  :handleChange="handleSearch"/>
            <div>search</div>
        </div>
        <div class="block">
            <CustomInput :handleChange="handleUpdArr"/>
            <div class="icon" @click="handleAddItem">+</div>
        </div>
        <div class="block" v-for="(item, i) in contentArr" :key="item">
            <div @click="handleClick(item)" class="item">
                <div>{{ item }}</div>
            </div>
            <div class="icon" @click="handleDeleteItem(i)">-</div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.block{
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    margin-bottom: 8px;
}
.item{
    display: flex;
    width: 100%;
    border: 1px solid;
    justify-content: space-between;
    cursor: pointer;
    padding: 4px 8px;
    &:hover{
        background-color: grey;
        color: #fff;
    }
}
.icon{
        border: 1px solid grey;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        padding: 0px 10px;

}
</style>