<template>
  <div class="w-full h-screen relative z-10">
    <div id="map" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { onMounted, ref } from 'vue';

const map = ref(null);
const coordinates = ref([0, 0]);

onMounted(() => {
  map.value = L.map('map').setView([46.05, 11.05], 5);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value);
  const customPane = map.value.createPane('customPane');
  customPane.style.zIndex = 399;

  setTimeout(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      coordinates.value[0] = position.coords.latitude;
      coordinates.value[1] = position.coords.longitude;
      L.marker(coordinates.value).addTo(map.value);
      map.value.locate({ setView: true, maxZoom: 24 });
    });
  }, 1000);
});
</script>
