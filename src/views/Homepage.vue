<template>
  <div>
    <div class="relative w-full h-screen">
      <div
        class="absolute z-10 h-screen w-full inset-0 flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center banner-home"
      >
        <div class="my-banner-title text-white text-center animate-fade-in-down">PODS</div>
        <div
          class="my-banner-subtitle text-center text-white animate-fade-in-down"
        >Phuket, Thailand (VTSP / HKT)</div>
        <div class="absolute z-10 bottom-0 right-0  w-1/2">
          <img src="../assets/images/address.jpg" alt="address" title="address" class="md:hidden"/>
        </div>
      </div>
    </div>
    <div class="md:grid md:grid-cols-4">
      <div class="text-center col-span-3 paragraph-container">
        <span class="my-title">About us</span>
        <div class="mt-5 my-text text-gray-600 mx-4">{{about}}</div>
      </div>
      <div class="text-center paragraph-container px-5 hidden md:block">
        <img src="../assets/images/address.jpg" alt="address" title="address"/>
        <div class="my-text mt-10 text-left">Phuket flight operation & dispatch services Company Limited</div>
        <div class="text-left">
          Phuket international Airport
          222 Maikao ,Thalang ,Phuket 83110 Thailand.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about:
        "we would like to introduce that we are the professional company in flight information service ( including dispatch release ,flight plan, weather information, Notam and other necessary aviation information ) were organized by aircraft dispatcher ( FAA licensed)  and presented to flight crew members prior to an individual inbound and outbound flights.  Our staff has their highly experience for handling Airline customer has flown to Thailand   ex; flight plan system such as lido system, sabre , nav tech or jeppesen. Ensure ATS flight plan of each is appropriated filing and distributing to related function and ATS message necessary to appropriated unit to ensure ATS flight service ability of each flight. Request and coordinate to any ATS slot time related to flight operation and ensure slot availability according to PIC or Local Airline staff on request. Not only PODS serve your flight at Phuket we Also do our service at Chiangmai airport (CNX) as well. Chiangmai is one of the most famous city in Thailand and there are so many place for tourist to visiting. Chiangmai airport operating hours from 2300-1700 utc.",
    };
  },
};
</script>

<style>
.banner-home {
  background: linear-gradient(to bottom, transparent 80%, white),
    url("../assets/images/banners/banner_4.jpg");
}
</style>