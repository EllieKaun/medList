<script lang="ts" setup>
const props = defineProps(['open', 'title']);
</script>


<template>
    <div>
        <a-modal :title="title" :open="open" :closable="false" :footer="null">
            <slot></slot>
        </a-modal>
    </div>
</template>
