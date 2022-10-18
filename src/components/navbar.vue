<template>
  <div class="fixed top-0 z-50 w-full" :class="showNavbar ? 'narbar--show':'navbar--hidden'">
    <div
      class="opacity-80 flex justify-between relative"
      :class="(ontopNavbar && !isOpen) ? 'trans--hidden':'bg-black'"
    >
      <img src="../assets/images/logo_pods.png" alt="logo_pods" class="md:h-20 h-16 mx-2" />
      <ul class="md:flex justify-center items-center hidden">
        <li class="md:py-4 text-white my-button my-text hover:bg-gray-600">
          <router-link class="md:p-4" to="/">Home</router-link>
        </li>
        <li class="md:py-4 text-white my-button my-text hover:bg-gray-600">
          <router-link class="md:p-4" to="/services">Services</router-link>
        </li>
        <li class="md:py-4 text-white my-button my-text hover:bg-gray-600">
          <router-link class="md:p-4" to="/additional">Additional</router-link>
        </li>
        <li class="md:py-4 text-white my-button my-text hover:bg-gray-600">
          <a href="mailto:dispatch@phuketflightops.com" class="md:p-4">Contact us</a>
        </li>
      </ul>

      <div class="flex justify-center items-center md:hidden">
        <a href="mailto:dispatch@phuketflightops.com">
          <i class="fas fa-at text-3xl mx-2 text-white"></i>
        </a>
        <a href="tel:0805994959">
          <i class="fas fa-phone-alt text-3xl mx-2 text-white"></i>
        </a>
        <button @click="isOpen = !isOpen">
          <i class="fas fa-bars text-3xl mx-2 text-white"></i>
        </button>
        <div class="absolute w-full left-0 top-16" :class="(isOpen && showNavbar) ? '':'hidden'"> 
          <div class="bg-white">
            <router-link to="/">
              <div @click="isOpen = false" class="text-right px-3 my-menutext">Home</div>
            </router-link>
            <router-link to="/services">
              <div @click="isOpen = false" class="text-right px-3 my-menutext">Services</div>
            </router-link>
            <router-link to="/additional">
              <div @click="isOpen = false" class="text-right px-3 my-menutext">Additional</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      showNavbar: true,
      ontopNavbar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      // Get the current scroll position
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        console.log("this on top");
        return;
      }
      if (currentScrollPosition == 0) {
        this.ontopNavbar = true;
        return;
      }
      this.ontopNavbar = false;
      
      // Here we determine whether we need to show or hide the navbar
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.isOpen = false;
      // Set the current scroll position as the last scroll position
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style>
.navbar--hidden {
  transition: 0.3s all ease-out;
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
.narbar--show {
  transition: 0.2s all ease-in;
  box-shadow: none;
  transform: translate3d(0, 0, 0);
}

.trans--hidden {
  animation: tran 0.4s;
}
@keyframes tran {
  from {
    background-color: black;
    opacity: 0.8;
  }
  to {
    background-color: transparent;
  }
}
</style>