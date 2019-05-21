<template>
    <section class="section_padding">
        <b-container>
            <b-row v-for="b in this.boats" :key="b.id">
                <b-col cols="12" md="5" class="product_wrapper">
                    <h5 class="product_title">{{b.Boat_name}}</h5>
                    <p class="product_description">{{b.Boat_description}}</p>
                    <ul class="product_detail">
                        <li> 
                            <div class="product_icon"><img src="~assets/img/product-img1.png" alt=""></div>
                            <span>Length:</span>{{b.Boat_length}}
                        </li>
                        <li> 
                            <div class="product_icon"><img src="~assets/img/product-img2.png" alt=""></div>
                            <span>Beam:</span>{{b.Boat_beam}}
                        </li>
                        <li> 
                            <div class="product_icon"><img src="~assets/img/product-img3.png" alt=""></div>
                            <span>Engine:</span>{{b.Boat_engine}}
                        </li>
                    </ul>
                    <a href="" class="btn btn-main">View boat</a>
                </b-col>
                <b-col cols="12" md="7" class="product_img_wrapper">
                    <img src="#" alt="">
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
//import Loader from "~/components/Loader.vue";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);
export default {
    data() {
    return {
      boats: null,
      loading: true
    
    };
//   },
//    components: {
//     Loader
   
  },
   created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.loading = true;
      let response = await strapi
        .request("get", "/boats")
        .then((this.loading = false));
      console.log(response);
      this.boats = response;
    }

}
};
</script>
