<template>
  <section class="video_promos">
    <b-container>
      <b-col>
        <b-row>
          <h5 class="left_border">Wath promo videos</h5>
        </b-row>
      </b-col>
    </b-container>
    <b-container fluid v-if="promos" class="px-0 py-3">
      <b-row no-gutters>
        <b-col>
          <b-carousel controls indicators img-width="1920" img-height="480" :interval="interval">
            <b-carousel-slide v-for="p in this.promos" :key="p.id">
              <img slot="img" :src="get_thumbnail_url(p)" width="1920" height="680">
              <div class="promo_wrapper">
                <font-awesome-icon :icon="['fas', 'play-circle']" @click="open_promo_modal(p.id)"/>
                <h4 class="promo_title">{{p.title}}</h4>
                <h3>{{get_youtube_id(p.YoutubeLink)}}</h3>
                <span class="promo_description">{{p.description}}</span>
              </div>
              <b-modal :id="'promo_modal-' + p.id">
                <template slot="modal-header">
                  <font-awesome-icon
                    :icon="['fas', 'times-circle']"
                    class="close_icon"
                    @click="close_promo_modal(p.id)"
                  />
                </template>
                <template slot="default">
                  <iframe
                    width="1280"
                    height="720"
                    :src="'https://www.youtube.com/embed/' + get_youtube_id(p.YoutubeLink)"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    color="red"
                    modestbranding="1"
                  ></iframe>
                </template>
                <template slot="modal-footer"></template>
              </b-modal>
            </b-carousel-slide>
            <div>{{get_youtube_id('https://www.youtube.com/NdqbI0_0GsM')}}</div>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
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
      interval: 5000
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
      this.interval = 0;
    });
    this.$root.$on("bv::modal::hide", (bvEvent, modalId) => {
      //Runs on modal closing
      this.interval = 5000;
    });
  }
};
</script>

