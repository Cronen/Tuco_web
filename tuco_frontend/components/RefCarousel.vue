<template>
  <div class="refcarousel"  >
    <carousel :autoplay="true" :loop="true" :autoplayTime="8000" :nav="false" :dots="true" :responsive="{0:{items:1},768:{items:2}}" v-if="!loading">
      <div class="review_wrapper"  v-for="r in this.reviews" :key="r.id">
        <div class="review_img">
          <img :src="get_image_url(r.review_image.url)" alt="">
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">{{r.review_name}}</h4>
          <span class="review_company">{{r.review_company}}</span>
          <p class="review_text"
          >{{r.review_description}}</p>
        </div>
      </div>
      <!-- <div class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Karsten Nielsen</h4>
          <span class="review_company">Danaos</span>
          <p class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </div> -->
      <!-- <div class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review1.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Jan Johansen</h4>
          <span class="review_company">IXblue</span>
          <p class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </div> -->
      <!-- <div class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Karsten Nielsen</h4>
          <span class="review_company">Danaos</span>
          <p class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </div> -->
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
   data() {
    return {
    reviews: null,
    loading: true
  };
  },
   components: { 
    carousel
  },

   created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/reviews?review_featured=true")
        .then((this.loading = false));
      console.log(response);
      this.reviews = response[0]
    },
    get_image_url(url){
        return strapi_url + url;
    },
 }
};
</script>
