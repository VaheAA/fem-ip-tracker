<template>
  <h1>IP Tracker</h1>
</template>
<script setup>
import { onMounted } from 'vue';

onMounted(async () => {
  const res = await fetch(
    'https://geo.ipify.org/api/v2/country?apiKey=at_HE9nGhnpFkoIfoNLlwIchHCyRGajj'
  );
  const data = await res.json();
  console.log(data);
});
</script>
