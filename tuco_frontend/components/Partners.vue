<template>
  <section class="partners">
    <b-container>
      <b-row class="partners_wrapper" v-if="!loading">
        <b-col cols="12" md="6" lg="4" class="mb-30" v-for="r in references" v-bind:key="r.id">
          <RefCard :reference="r"/>
        </b-col>
      </b-row>
      <b-row v-else>
        <b-col cols="1" class="mx-auto">
          <Loader/>
        </b-col>
      </b-row>
      <!-- <b-row class="references_logos">
            <b-col cols="12" sm="4" md="6" lg="1-5" class="mb-4" v-for="r in references" v-bind:key="r.id">
              <RefCard :reference="r"/>
            </b-col>
      </b-row>-->
    </b-container>
  </section>
</template>

<script>
import RefCard from "~/components/RefCard.vue";
import Loader from "~/components/Loader.vue";
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
  data() {
    return {
      RefCard: null,
      loading: false,
      strapi_url: strapi_url
    };
  },
  components: {
    Loader,
    RefCard
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request(
          "get", "/references?_sort=createdAt:DESC&featured=true&_limit=4"
        )
        .then((this.loading = false));
      this.references = response
    }
  }
};
</script>
