<template>
  <div class="bg-pattern-bg bg-no-repeat bg-cover max-w-full h-full">
    <div class="container mx-auto px-4 md:py-14 pt-14 pb-36 relative">
      <h1 class="text-center text-white text-3xl md:text-5xl mb-8 font-bold">
        IP Address Tracker
      </h1>
      <TrackerForm v-model="ipInput" @handleSubmit="getIp" />
      <TrackerResult :information="address" />
    </div>
    <TrackerMap :information="address" />
  </div>
</template>

<script setup>
import TrackerForm from './TrackerForm.vue';
import TrackerResult from './TrackerResult.vue';
import { ref, onMounted } from 'vue';
import { getData } from '../composables/getData';
import { checkIp } from '../helpers/checkIp';
import TrackerMap from './TrackerMap.vue';

const ipInput = ref('');

const { address, getUserData, fetchUserIp } = getData();

const getIp = async () => {
  if (checkIp(ipInput) && ipInput.value !== '') {
    await fetchUserIp(ipInput.value);
  } else {
    ipInput.value = '';
    alert('Please input valid IP address');
  }
};

onMounted(async () => {
  await getUserData();
});
</script>
