<script lang="ts" setup>
    import { watch, ref } from 'vue';
    import CustomText from './CustomText.vue';

    const props = defineProps(['placeholder', 'handleChange', 'className']);
    const value = ref<string>('');
    watch(value, () => {
        props.handleChange(value.value)
    });

</script>

<template> 
    <div class="inputWrapper">
      <CustomText class="subtitle" type="text"><slot></slot></CustomText>
      <a-space direction="vertical">
        <a-input v-model:value="value" :placeholder="placeholder" />
      </a-space>
    </div>
</template>

<style scoped lang="scss">
.inputWrapper{
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    .subtitle{
        margin-bottom: 8px;
    }
}
</style>
