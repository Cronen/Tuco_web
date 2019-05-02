<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title text-danger">tuco_frontend</h1>
      <h2 class="subtitle">frontend for tuco website</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
      <div v-if="references">
        Reference name from Strapi:
        <b>{{references[0].ref_name}}</b>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Strapi from "strapi-sdk-javascript";
const strapi = new Strapi("http://localhost:1337");

export default {
  data() {
    return {
      loading: false,
      references: null
    };
  },
  components: {
    Logo
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
