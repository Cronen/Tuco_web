<template>
  <section class="video_promos">
    <b-container>
      <b-row class="mb-25">
        <b-col>
          <h5 class="left_border">Wath promo videos</h5>
        </b-col>
      </b-row>
    </b-container>
      <b-carousel indicators img-width="1920" img-height="480" :interval="interval">
        <div class="video_promo_overlay"></div>
        <b-carousel-slide v-for="p in this.promos" :key="p.id">
          <img slot="img" :src="get_thumbnail_url(p)" class="carousel_img">
          <div class="container">
            <button class="play_btn" @click="open_promo_modal(p.id)">
              <div class="play_wrapper"><div class="play_inner"><div class="play_icon"></div></div></div>
            </button>
            <h4 class="promo_title">{{p.title}}</h4>
            <span class="promo_description">{{p.description}}</span>
          </div>
          <b-modal
            :id="'promo_modal-' + p.id"
            :hide-header="true"
            :hide-footer="true"
            class="promo_modal"
            size="fluid"
          >
            <button @click="close_promo_modal(p.id)" class="close_btn">
              <div class="close_inner">
                <img src="~assets/img/close-icon.svg"/>
              </div>
            </button>
            <div class="player_area">
              <iframe
                v-if="playing_id == p.id"
                class="promo_video"
                height="230px"
                width="460px"
                :src="'https://www.youtube.com/embed/' + get_youtube_id(p.YoutubeLink) + '?autoplay=1'"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                modestbranding="1"
              />
            </div>
          </b-modal>
        </b-carousel-slide>
        <div>{{get_youtube_id('https://www.youtube.com/NdqbI0_0GsM')}}</div>
      </b-carousel>
  </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
  data() {
    return {
      promos: null,
      loading: true,
      interval: 20000,
      playing_id: ""
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/promovideos")
        .then((this.loading = false));
      console.log(response[1]);
      this.promos = response;
    },
    get_thumbnail_url(promo) {
      return strapi_url + promo.thumbnail.url;
    },
    get_youtube_id(url) {
      // let pattern = new RegExp('v=([a-zA-Z0-9_-]+)&?');
      // alert(pattern.exec(url[0]));
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return match && match[7].length == 11 ? match[7] : false;
    },
    open_promo_modal(id) {
      this.$bvModal.show("promo_modal-" + id);
    },
    close_promo_modal(id) {
      this.$bvModal.hide("promo_modal-" + id);
    }
  },
  mounted() {
    this.$root.$on("bv::modal::show", (bvEvent, modalId) => {
      //Runs on modal opening
      console.log("Opens", modalId);
      this.playing_id = modalId.split("-")[1];

      this.interval = 0;
    });
    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      //Runs on modal closing
      console.log("Closes", modalId);
      this.playing_id = "";
      this.interval = 20000;
    });
  }
};
</script>

