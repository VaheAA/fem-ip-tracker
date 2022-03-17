<template>
  <form
    class="flex justify-center items-center mx-auto h-full w-2/5 mb-12"
    @submit.prevent="handleSubmit"
  >
    <input
      class="w-full px-3 py-3 h-14 rounded-l-md outline-none"
      type="text"
      placeholder="Search for any IP address or domain"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button
      class="bg-veryDarkGray h-14 w-14 flex flex-col justify-center items-center px-3 py-3 rounded-r-md"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
        <path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" />
      </svg>
    </button>
  </form>
</template>

<script setup>
defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue', 'handleSubmit']);

const handleSubmit = () => {
  emit('handleSubmit');
};
</script>
