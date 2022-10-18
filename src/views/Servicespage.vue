<template>
  <div>
    <div class="relative w-full h-96">
      <div class="absolute z-10 w-full inset-0 bg-cover bg-no-repeat bg-center banner-services"></div>
    </div>
    <div class="paragraph-container">
      <div class="my-title text-center">Services</div>
      <ul class="list-outside list-disc px-7">
        <li v-for="(service,index) in services" :key="index" class="py-2">
          <span class="my-text">{{service}}</span>
        </li>
      </ul>
      <div class="md:grid md:grid-cols-3 gap-7 flex flex-col my-4">
          <img src="../assets/images/services/service_1.jpg" alt="service_1.jpg" title="service-1" class="h-56 rounded-2xl w-full md:p-0 p-3">
          <img src="../assets/images/services/service_2.jpg" alt="service_2.jpg" title="service-2" class="h-56 rounded-2xl w-full md:p-0 p-3">
          <img src="../assets/images/services/service_3.jpg" alt="service_3.jpg" title="service-3" class="h-56 rounded-2xl w-full md:p-0 p-3">
          <img src="../assets/images/services/service_4.jpg" alt="service_4.jpg" title="service-4" class="h-56 md:h-full rounded-2xl w-full md:p-0 p-3 md:row-span-2">
          <img src="../assets/images/services/service_5.jpg" alt="service_5.jpg" title="service-5" class="h-56 rounded-2xl w-full md:p-0 p-3 md:col-span-2">
          <img src="../assets/images/services/service_6.jpg" alt="service_6.jpg" title="service-6" class="h-56 rounded-2xl w-full md:p-0 p-3 md:col-span-2">
          <img src="../assets/images/services/service_7.jpg" alt="service_7.jpg" title="service-7" class="h-56 md:h-full rounded-2xl h-full w-full md:p-0 p-3 md:col-span-2 md:row-span-2">
          <img src="../assets/images/services/service_8.jpg" alt="service_8.jpg" title="service-8" class="h-56 rounded-2xl w-full md:p-0 p-3">
          <img src="../assets/images/services/service_9.jpg" alt="service_9.jpg" title="service-9" class="h-56 rounded-2xl w-full md:p-0 p-3">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      services: [
        "Flight plan preparation",
        "Weather and NOTAM update and arrangement",
        "Document delivery",
        "ATS flight plan filling and SLOT coordination",
        "Monitors operations on the ground to ensure safety in flight",
        "Crew care and escort",
        "Flight watch and irregularity coordination",
        "Briefs pilots on the flight, such as the flight plan, in the airport office prior to departure",
        "Coordination with flight safety related functions for customer flight benefit and safety",
        "Provide information on flight safety/flight operation procedure concerning flight conducting at airport/ Thailand's airspace to customer.",
      ],
    };
  },
};
</script>

<style>
.banner-services {
  background: linear-gradient(to bottom, transparent 80%, white),
    url("../assets/images/banners/banner_5.jpg");
}
</style>