<script setup lang="ts">
    import { ref } from 'vue';
    import { useAfterStore } from '@/stores/after';

    const { nums, setCurrentNum } = useAfterStore()

    const curr = ref(0)

    const handleNumClick = (value: number) => {
        curr.value = value;
        setCurrentNum(value);
    }
</script>

<template>
    <div class="contentWrapper">
        <div 
            :class="{item, colored: curr === (i + 1)}" 
            v-for="(item, i) in nums" 
            :key="item"
            @click="handleNumClick(i+1)"
        >
            {{  item }}
        </div>
    </div>
</template>

<style scoped>
.contentWrapper{
    display: flex;
    gap: 10px;
}
.item{
    border: 1px solid;
    padding: 8px 16px;
    cursor: pointer;
}

.colored{
    background-color: #1AA7EC;
    color: #fff;
}
</style>