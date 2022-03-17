<template>
  <div
    class="bg-white max-w-[1100px] w-11/12 mx-auto md:w-full py-2 px-2 md:py-4 md:px-4 rounded-xl flex flex-col md:flex-row md:justify-between gap-2 md:gap-10 md:items-center absolute -bottom-4 left-1/2 -translate-x-2/4 translate-y-2/4 z-50"
    :information="information"
  >
    <div
      class="flex flex-col items-center md:items-start justify-center w-full py-3 px-3 md:border-r-2 border-r-darkGray border-opacity-30 text-center md:text-left"
    >
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-2 md:mb-3 inline-block"
        >IP address</span
      >
      <p class="text-veryDarkGray text-2xl md:text-3xl font-bold">
        {{ information ? information.ip : 'IP address' }}
      </p>
    </div>
    <div
      class="flex flex-col items-center md:items-start justify-center w-full py-3 px-3 md:border-r-2 border-r-darkGray border-opacity-30 text-center md:text-left"
    >
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-2 md:mb-3 inline-block"
        >Location</span
      >
      <p class="text-veryDarkGray text-2xl md:text-3xl font-bold">
        {{ information ? information.location.region : 'Region' }},
        {{ information ? information.location.country : 'Country' }}
        {{ information ? information.location.postalCode : '' }}
      </p>
    </div>
    <div
      class="flex flex-col items-center md:items-start justify-center w-full py-3 px-3 md:border-r-2 border-r-darkGray border-opacity-30 text-center md:text-left"
    >
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-2 md:mb-3 inline-block"
        >Timezone</span
      >
      <p class="text-veryDarkGray text-2xl md:text-3xl font-bold">
        {{ information ? information.location.timezone : 'Timezone' }}
      </p>
    </div>
    <div
      class="py-3 px-3 flex flex-col md:items-start items-center justify-center w-full text-center md:text-left"
    >
      <span
        class="text-darkGray uppercase text-xs font-bold tracking-wider mb-2 md:mb-3 inline-block"
        >ISP</span
      >
      <p class="text-veryDarkGray text-2xl md:text-3xl font-bold">
        {{ information ? information.isp : 'ISP' }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  information: Array
});
</script>
