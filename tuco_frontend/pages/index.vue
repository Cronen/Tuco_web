<template>
  <section class="container">
    <div>
      <div v-if="references">
        Reference name from Strapi:
        <b>{{references[0].ref_name}}</b>
      </div>
    </div>
  </section>
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
