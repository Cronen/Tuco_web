<template>
  <div id="app">
    <FrontBanner/>
    <IntroAbout/>
    <FeaturedCases/>
    <VideoPromo/>
    <FrontProduct/>
    <RecentNews/>
    <Partners/>
    <NewsletterForm/>
  </div>
</template>

<script>
import FrontBanner from "~/components/FrontBanner.vue";
import IntroAbout from "~/components/IntroAbout.vue";
import FeaturedCases from "~/components/FeaturedCases.vue";
import VideoPromo from "~/components/VideoPromo.vue";
import FrontProduct from "~/components/FrontProduct.vue";
import RecentNews from "~/components/RecentNews.vue";
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
    FrontProduct,
    RecentNews,
    Partners,
    NewsletterForm
  },
};
</script>
