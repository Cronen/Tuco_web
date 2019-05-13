<template>
  <div>
    <subbanner/>
    <div id="caseList">
      <section class="section_padding">
        <b-container>
          <b-row>
            <b-col md="7" lg="6" class="intro_wrapper">
              <h2>Our Latest Cases</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            </b-col>
          </b-row>
        </b-container>
        <b-container v-if="cases">
          <b-row>
            <b-col cols="12" md="3" lg="4" v-for="c in cases" v-bind:key="c.id">
              <CaseCard :case="c"/>
            </b-col>
          </b-row>
        </b-container>
        <b-container v-else>
          <b-row>
            <b-col cols="1" class="mx-auto">
              <Loader/>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
  </div>
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import Loader from "~/components/Loader.vue";
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
    Loader,
    subbanner
  },
  created() {
    this.fetchData();
    console.log(this.cases);
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/cases?_sort=createdAt:DESC")
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
