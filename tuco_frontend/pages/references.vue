<template>
  <div>
    <div>
    <subbanner/>
    </div>
    <div id="references">
      <section class="section_padding">
        <b-container>
          <b-row>
            <b-col md="7" lg="6">
              <h2>Our References</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
            </b-col>
          </b-row>
        </b-container>
        <b-container v-if="references">
          <b-row>
            <b-col cols="6" sm="4" md="3" lg="2" v-for="r in references" v-bind:key="r.id">
              <RefCard :reference="r"/>
            </b-col>
            <!-- TODO: remove below when testing is done -->
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <b-col cols="6" sm="4" md="3" lg="2">
              <a href="#">
                <img class="radius_box" src="../assets/img/references/Danskemaritime.jpg" alt>
              </a>
            </b-col>
            <!-- Till here -->
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
import RefCard from "~/components/RefCard.vue";
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
  data() {
    return {
      loading: false,
      references: null,
      strapi_url: strapi_url
    };
  },
  components: {
    Loader,
    RefCard,
    subbanner
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
  }
};
</script>
