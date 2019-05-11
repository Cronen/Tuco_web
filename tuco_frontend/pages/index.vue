<template>
  <div id="app">
    <FrontBanner/>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h2>Classification Projects</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="container">
      <div>
        <div v-if="references">
          Reference name from Strapi:
          <b>{{references[0].ref_name}}</b>
        </div>
      </div>
    </section>
    <section class="partners">
      <b-container>
        <b-row class="partners_wrapper">
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/Tekinstitut-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/molslinjen-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/ixblue-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/university-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/dfds-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/man-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/dbi-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner"><img src="../assets/img/partners/scandlines-logo.svg" alt="partner logo"></b-col>
        </b-row>
      </b-container>
    </section>
    <NewsletterForm/>
  </div>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
const strapi = new Strapi("http://localhost:1337");
import FrontBanner from "~/components/FrontBanner.vue";
import NewsletterForm from "~/components/NewsletterForm.vue";

export default {
  data() {
    return {
      loading: false,
      references: null
    };
  },
  components: {
    FrontBanner,
    NewsletterForm
  },
  created() {
    this.fetchData();
    console.log(this.references);
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/references")
        .then((this.loading = false));
      console.log(response[0]);
      this.references = response;
    }
  },
  mounted: async () => {}
};
</script>

<style>
</style>
