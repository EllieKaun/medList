<script lang="ts" setup>
    import { ref } from 'vue';
    const props = defineProps(['options', 'defultValue', 'action']);
    const value = ref(props.defultValue);
</script>

<template>
    <a-radio-group v-model:value="value">
        <a-radio-button 
          class="radioButton"
          v-for="(item) in options"
          :key="item.value"
          :value="item.value"
          @click="action(item.value)"
        >
        {{ item.title }}
        </a-radio-button>
    </a-radio-group>
</template>

<style scoped>
    .radioButton{
        border-radius: unset;
        margin-right: 10px;
        padding: 0 32px;
    }
</style>
