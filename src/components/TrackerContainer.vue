<template>
  <div class="bg-pattern-bg bg-no-repeat bg-cover max-w-full h-full">
    <div class="container mx-auto px-4 py-4">
      <h1 class="text-center text-white text-5xl mb-8 font-bold">
        IP Address Tracker
      </h1>
      <TrackerForm v-model="ipInput" @handleSubmit="getIp" />
      <TrackerResult v-if="address" :information="address" />
    </div>
  </div>
</template>

<script setup>
import TrackerForm from './TrackerForm.vue';
import TrackerResult from './TrackerResult.vue';
import { ref, onMounted } from 'vue';
import { getData } from '../composables/getData';
import { checkIp } from '../helpers/checkIp';

const ipInput = ref('');

const { address, getUserData, fetchUserIp } = getData();

const getIp = async () => {
  if (checkIp(ipInput) && ipInput.value !== '') {
    await fetchUserIp(ipInput.value);
  } else {
    alert('Please input valid IP address');
  }
};

onMounted(async () => {
  await getUserData();
});
</script>
