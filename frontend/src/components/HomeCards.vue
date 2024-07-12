<script setup>
import Card from "@/components/Card.vue";
</script>

<template>
 <section class="py-4">
  <div class="container-xl lg:container m-auto">
   <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
    <Card bg="bg-gray-100" header="For Developers" title="Browse our Vue jobs and start your career today"
     buttonText="Browse Jobs" />
    <Card bg="bg-green-100" header="For Employer" title="List your job to find the perfect developer for the role"
     buttonText="Add Job" />
   </div>
  </div>
 </section>
</template>