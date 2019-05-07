<template>
  <div class="default_layout">
    <div class="container">
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>
