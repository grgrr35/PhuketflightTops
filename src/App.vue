<template>
  <div id="app">
    <navbar />
    <router-view />
    <myfooter />
  </div>
</template>

<script>
import myfooter from './components/myfooter.vue';
import navbar from "./components/navbar";
export default {
  name: 'App',
  components: {
    myfooter,
    navbar
  },
};
</script>

<style>
</style>
