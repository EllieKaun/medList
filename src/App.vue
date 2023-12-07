<script setup lang="ts">
import TreatmentSession from './features/TreatmentSession.vue';
import AfterSession from './features/AfterSession.vue';
import HomeSession from './features/HomeSession.vue';
import FinalRecomendations from './features/FinalRecomendations.vue';
</script>

<template>
  <div class="container">
    <div class="globalWrapper">
      <TreatmentSession/>
    </div>
    <AfterSession />
    <div class="globalWrapper">
      <HomeSession />
      <FinalRecomendations />
    </div>
  </div>
</template>

<style scoped>
.container{
  margin: auto;
  width: 1200px;
}
.globalWrapper{
  width: 60%;
}
</style>
