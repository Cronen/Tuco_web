<template>
  <div>
    <subbanner title="Cases"/>
    <div id="caseList">
      <section class="section_padding">
        <b-container>
          <b-row>
            <b-col md="7" lg="6" class="mb-80">
              <h2>Our Latest Cases</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            </b-col>
          </b-row>
        </b-container>
        <b-container>
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
          <b-row class="page_container justify-content-center align-items-center">
            <b-col cols="auto" class="page_arrow mr-5" @click="previous_page()">
              <font-awesome-icon :icon="['fa', 'angle-left']" :color="get_arrow_color(false)"/>
            </b-col>
            <b-col cols="auto" v-for="n in totalPages" :key="n" @click="change_page(n)" class="page_number" :class="{'page_acive': n == current_page}">{{n &lt; 11 ? '0'+n:n}}</b-col>
            <b-col cols="auto" class="page_arrow ml-5" @click="next_page()" :class="{'arrow_disabled': current_page == totalPages}">
              <font-awesome-icon :icon="['fa', 'angle-right']" :color="get_arrow_color(true)" />
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
const limit_per_page = 3;

export default {
  data() {
    return {
      loading: false,
      strapi_url: strapi_url,
      cases: null,
      current_page: 1,
      totalPages: null
    };
  },
  components: {
    CaseCard,
    Loader,
    subbanner
  },
  created() {
    this.first_fetchData();
  },
  methods: {
    async first_fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/cases?_sort=createdAt:DESC")
        .then((this.loading = false));
      this.totalPages = Math.ceil(response.length / limit_per_page);
      this.cases = response.slice(0, limit_per_page);
    },
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request(
          "get",
          "/cases?_sort=createdAt:DESC&_start=" +
            (this.current_page - 1) * limit_per_page +
            "&_limit=" +
            limit_per_page
        )
        .then((this.loading = false));
      this.cases = response;
    },
    change_page(change_to_page) {
      this.current_page = change_to_page;
      this.fetchData();
    },
    next_page() {
      if (this.current_page != this.totalPages) {
        this.change_page(this.current_page + 1);
      }
    },
    previous_page() {
      if (this.current_page != 1) {
        this.change_page(this.current_page - 1);
      }
    },
    get_arrow_color(next){
      let color = 'red';
      if(next){
        color = this.current_page != this.totalPages ? 'red': 'grey';
      }else{
        color = this.current_page != 1 ? 'red': 'grey';
      }
      return color;
    }
  },
  mounted: async () => {}
};
</script>

<style>
</style>
