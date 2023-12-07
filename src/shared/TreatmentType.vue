<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from './UI/CustomButton.vue';
import CustomText from './UI/CustomText.vue';
import CustomModal from './UI/CustomModal.vue';
import MedicineDrugs from './MedicineDrugs.vue';


const props = defineProps(['title', 'data', 'saveCurr']);

const openModal = ref<boolean>(false)
const handleOpenModal = () => {
    openModal.value = true
}
const handleCloseModal = () => {
    openModal.value = false
}
</script>

<template>
    <div>
        <CustomText class="sessionTypeItem" @click="handleOpenModal" type="block">
            <slot></slot>
        </CustomText>
            <CustomModal :open="openModal" :title="title">
            <div>
                <CustomButton @click="handleCloseModal">Закрыть</CustomButton>
            </div>
            <MedicineDrugs :data="data" :saveCurr="saveCurr"/>
        </CustomModal>
    </div>
</template>

<style scoped lang="scss">
    .sessionTypeItem{
        margin-right: 8px;
        cursor: pointer;
    }
</style>