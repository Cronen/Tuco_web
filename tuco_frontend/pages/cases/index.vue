<template>
  <section class="row">
    <div>
      <div v-if="cases">
        Reference name from Strapi:
        <b>{{cases[0].title}}</b>
         <img class="case_img" :src="strapi_url + cases[0].case_image.url" alt="case img">
      </div>
    </div>
  </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
  data() {
    return {
      loading: false,
      strapi_url: strapi_url,
      cases: null
    };
  },
  components: {},
  created() {
    this.fetchData();
    console.log(this.cases);
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/cases")
        .then((this.loading = false));
      console.log(response[0]);
      this.cases = response;
    }
  },
  mounted: async () => {}
};
</script>

<style>
</style>
