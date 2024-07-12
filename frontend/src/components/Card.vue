<script setup>
import { defineProps } from 'vue';
defineProps({
 bg: {
  type: String,
  default: "bg-gray-100"
 },
 title: {
  type: String
 },
 buttonText: {
  type: String
 },
 header: {
  type: String
 }
})
</script>

<template>
 <div :class="`${bg} p-6 rounded-lg shadow-md`">
  <h2 class="text-2xl font-bold">{{ header }}</h2>
  <p class="mt-2 mb-4">
   {{ title }}
  </p>
  <a class="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
   {{ buttonText }}
  </a>
 </div>
</template>