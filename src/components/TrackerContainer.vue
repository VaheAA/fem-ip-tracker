<template>
  <main class="bg-pattern-bg bg-no-repeat bg-contain max-w-full h-full">
    <div class="container mx-auto px-4 md:py-14 pt-14 pb-36 relative">
      <h1 class="text-center text-white text-3xl md:text-5xl mb-8 font-bold">
        IP Address Tracker
      </h1>
      <TrackerForm v-model="ipInput" @handleSubmit="handleSubmit" />
      <TrackerResult :information="address" />
    </div>
    <TrackerMap :information="address" />
  </main>
</template>

<script setup>
import TrackerForm from './TrackerForm.vue';
import TrackerResult from './TrackerResult.vue';
import { ref, onMounted } from 'vue';
import { getData } from '../composables/getData';
import { checkIp } from '../helpers/checkIp';
import { checkDomain } from '../helpers/checkDomain';
import TrackerMap from './TrackerMap.vue';

const ipInput = ref('');

const { address, getUserData, fetchUserIp, fetchUserDomain } = getData();

const getIp = async () => {
  await fetchUserIp(ipInput.value);
  ipInput.value = '';
};

const getDomain = async () => {
  await fetchUserDomain(ipInput.value);
  ipInput.value = '';
};

const handleSubmit = async () => {
  if (checkIp(ipInput)) {
    await getIp();
  } else if (checkDomain(ipInput)) {
    await getDomain();
  } else {
    alert('Input valid IP or domain');
  }
};

onMounted(async () => {
  await getUserData();
});
</script>
