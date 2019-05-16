<template>
  <section class="partners">
    <b-container>
      <b-row class="partners_wrapper">
        <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/Tekinstitut-logo.svg" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/molslinjen-logo.png" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/ixblue-logo.png" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/university-logo.png" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/dfds-logo.png" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/man-logo.png" alt="partner logo"></b-col>
            <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/dbi-logo.png" alt="partner logo"></b-col>
        <b-col cols="6" md="4" lg="3" class="partner_logo"><img class="filtered" src="../assets/img/partners/scandlines-logo.png" alt="partner logo"></b-col>-->
        

        <!-- <b-row v-if="!loading">
          <b-col cols="12" md="6" lg="4" class="mb-30" v-for="r in references" v-bind:key="r.id">
            <RefCard :reference="r"/>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="1" class="mx-auto">
            <Loader/>
          </b-col>
        </b-row> -->

        <!-- <b-row class="references_logos">
            <b-col cols="6" sm="4" md="3" lg="1-5" class="mb-4" v-for="r in references" v-bind:key="r.id">
              <RefCard :reference="r"/>
            </b-col>
        </b-row>-->
      </b-row>
    </b-container>
  </section>
</template>

<script>
// import RefCard from "~/components/RefCard.vue";
// import Loader from "~/components/Loader.vue";
// import Strapi from "strapi-sdk-javascript";
// const strapi_url = process.env.StrapiUrl;
// const strapi = new Strapi(strapi_url);

// export default {
//   data() {
//     return {
//       RefCard: null,
//       loading: false,
//       strapi_url: strapi_url
//     };
//   },
//   components: {
//     loader,
//     RefCard
//   },
//   created() {
//     this.fetchData();
//   },
//   methods: {
//     async fetchData() {
//       this.loading = true;
//       let response = await strapi
//         .request(
//           "get","/references?_sort=createdAt:ASC&featured=true&_limit=3"
//         )
//         .then((this.loading = false));
//       this.references = response;
//     }
//   }
// };
</script>
