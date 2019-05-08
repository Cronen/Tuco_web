<template>
  <div class="default_layout">
    <Header/>
    <div class="container">
      <nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
const strapi_url = "localhost yes";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
