<template>
  <div id="newsList">
    <subbanner title="News"/>
    <section class="section_padding">
      <b-container>
        <b-row>
          <b-col md="7" lg="6" class="mb-80">
            <h2 class="subpage_title">News Articles</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row v-if="!loading">
          <b-col sm="12" class="mb-4" > 
              <!-- This as test -->
            <ArticleCard
              title="Eleanor - 12m demonstrator for sale."
              intro_txt="Our 12m light pilot classed “Eleanor” is now offered for sale after a successful charter. Full specifications, General Arrangement as well as asking price can be obtained by contacting our team as..."
              date="March 8 2019 13.49"
              img_url="/_nuxt/assets/img/0b48acbe30999524ca3a49913345b1e9.jpg"
              link_url="#"
            />
          </b-col>
          <b-col sm="12" class="mb-4" v-for="n in news" :key="n.id">
            <ArticleCard
              :title="n.news_title"
              :intro_txt="n.news_description"
              :date="get_date(n.news_time)"
              :img_url="get_image_url(n.News_image.url)"
              :link_url="n.News_url"
            />
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="1" class="mx-auto">
            <Loader/>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import Loader from "~/components/Loader.vue";
import ArticleCard from "~/components/ArticleCard.vue";
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
  data() {
    return {
      news: null,
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  components: {
    subbanner,
    ArticleCard,
    Loader
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/news")
        .then((this.loading = false));
      console.log("news", response);
      this.news = response;
    },
    get_image_url(url) {
      return strapi_url + url;
    },
    get_date(date) {
      let d = new Date(date);
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      let mins = ("0" + d.getMinutes()).slice(-2);
      let hours = ("0" + d.getUTCHours()).slice(-2);
      return `${
        months[d.getMonth()]
      } ${d.getDate()} ${d.getFullYear()} ${hours}.${mins}`;
    }
  }
};
</script>
