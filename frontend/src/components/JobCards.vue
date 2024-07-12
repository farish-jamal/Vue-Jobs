<script setup>
import JobCard from "@/components/JobCard.vue";
</script>

<template>
  <section class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Job Listing 1 -->
        <JobCard
          opportunity="Full-Time"
          role="Senior Vue Developer"
          description="
                We are seeking a talented Front-End Developer to join our team
                in Boston, MA. The ideal candidate will have strong skills in
                HTML, CSS, and JavaScript..."
          salary="80K "
          location="Boston, MA"
        />
        <JobCard
          opportunity="Full-Time"
          role="Senior Vue Developer"
          description="
                We are seeking a talented Front-End Developer to join our team
                in Boston, MA. The ideal candidate will have strong skills in
                HTML, CSS, and JavaScript..."
          salary="80K "
          location="Boston, MA"
        />
        <JobCard
          opportunity="Full-Time"
          role="Senior Vue Developer"
          description="
                We are seeking a talented Front-End Developer to join our team
                in Boston, MA. The ideal candidate will have strong skills in
                HTML, CSS, and JavaScript..."
          salary="80K "
          location="Boston, MA"
        />
      </div>
    </div>
  </section>
</template>
