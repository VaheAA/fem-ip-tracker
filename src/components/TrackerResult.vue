<template>
  <div
    class="bg-white py-6 px-6 rounded-md flex justify-between gap-10 items-center"
    :information="information"
  >
    <div
      class="flex flex-col justify-center w-full py-3 px-3 border-r-2 border-r-darkGray border-opacity-30"
    >
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-3 inline-block"
        >IP address</span
      >
      <p class="text-veryDarkGray text-3xl font-bold">{{ information.ip }}</p>
    </div>
    <div
      class="flex flex-col justify-center w-full py-3 px-3 border-r-2 border-r-darkGray border-opacity-30"
    >
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-3 inline-block"
        >Location</span
      >
      <p class="text-veryDarkGray text-3xl font-bold">
        {{ information.location.region }},
        {{ information.location.country }}
      </p>
    </div>
    <div
      class="flex flex-col justify-center w-full py-3 px-3 border-r-2 border-r-darkGray border-opacity-30"
    >
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-3 inline-block"
        >Timezone</span
      >
      <p class="text-veryDarkGray text-4xl font-bold">
        {{ information.location.timezone }}
      </p>
    </div>
    <div class="py-3 px-3 flex flex-col justify-center w-full">
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-3 inline-block"
        >ISP</span
      >
      <p class="text-veryDarkGray text-3xl font-bold">{{ information.isp }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  information: Array
});
</script>
