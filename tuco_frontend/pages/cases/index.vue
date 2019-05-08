<template>
  <section class="row pb-5" v-if="cases">
    <div class="col-4" v-for="c in cases" v-bind:key="c.id">
      <CaseCard :case="c"/>
    </div>
  </section>
  <section v-else class="row pb-5">
    <Loader class="col-1 mx-auto"/>
  </section>
</template>

<script>
import Loader from '~/components/Loader.vue'
import CaseCard from "~/components/CaseCard.vue";
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
  components: { 
    CaseCard,
    Loader
    },
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
