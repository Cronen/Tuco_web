<template>
  <div id="app">

    <FrontBanner/>

    <IntroAbout/>
    
    <FeaturedCases/>

    <VideoPromo/>

    <Partners/>

    <NewsletterForm/>

  </div>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
const strapi = new Strapi("http://localhost:1337");
import FrontBanner from "~/components/FrontBanner.vue";
import IntroAbout from "~/components/IntroAbout.vue";
import FeaturedCases from "~/components/FeaturedCases.vue";
import VideoPromo from "~/components/VideoPromo.vue";
import Partners from "~/components/Partners.vue";
import NewsletterForm from "~/components/NewsletterForm.vue";

export default {
  data() {
    return {
      loading: false,
      references: null
    };
  },
  components: {
    FrontBanner,
    IntroAbout,
    FeaturedCases,
    VideoPromo,
    Partners,
    NewsletterForm
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
</style>
