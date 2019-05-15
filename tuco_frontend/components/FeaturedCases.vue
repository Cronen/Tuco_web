<template>
  <section class="section_padding">
    <b-container>
      <b-row class="mb-25">
        <b-col>
          <h5 class="left_border">Latest project cases</h5>
        </b-col>
      </b-row>
      <b-row v-if="!loading">
        <b-col cols="12" md="6" lg="4" class="mb-30" v-for="c in cases" v-bind:key="c.id">
          <CaseCard :case="c"/>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col cols="1" class="mx-auto">
          <Loader/>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import CaseCard from "~/components/CaseCard.vue";
import Loader from "~/components/Loader.vue";
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
  data() {
    return {
      cases: null,
      loading: false
    };
  },
  components: {
    Loader,
    CaseCard
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/cases?_sort=createdAt:DESC&featured=true&_limit=3")
        .then((this.loading = false));
      this.cases = response
    }
  }
};
</script>

