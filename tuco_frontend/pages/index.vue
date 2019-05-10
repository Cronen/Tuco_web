<template>
  <div id="app">
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
    <section>
      <b-container>
        <b-row class="flex-column">
          <h4>Join Tuco Marines Newsletter</h4>
          <p>Subscribe now and get the latest boat news</p>
          <input type="text" placeholder="Enter your email adress">
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
const strapi = new Strapi("http://localhost:1337");

export default {
  data() {
    return {
      loading: false,
      references: null
    };
  },
  components: {},
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
