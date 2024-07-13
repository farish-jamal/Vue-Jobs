<script setup>
 import JobCard from "../components/JobCard.vue";
 import {onMounted, ref} from "vue";

 const jobs = ref([]);

 const fetchJobs = async () => {
  try {
   const response = await fetch('http://localhost:8000/api/admin/getjobs');
   if(!response.ok){
    throw new Error (`HTTP error! status: ${response.status}`);
   }
   const data = await response.json();
   jobs.value = data.jobs;
  } catch (error) {
   console.error('Error fetching jobs:', error);
  }
 }

 onMounted(() => {
  fetchJobs();
 })
</script>

<template>
 <section class="bg-green-50 px-4 py-10">
   <div class="container-xl lg:container m-auto">
     <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
       Browse Jobs
     </h2>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
       <JobCard v-for="(job, index) in jobs" :key="index" :job="job" />
     </div>
   </div>
 </section>
</template>