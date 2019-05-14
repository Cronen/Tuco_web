<template>
  <section class="subbanner">
    <b-container>
      <b-row>
        <h1 class="subbanner_title">{{this.title}}</h1>
      </b-row>
    </b-container>
    <img v-if="this.img" class="subbanner_img" :src="this.img" alt="subbanner">
    <img v-else class="subbanner_img" src="~assets/img/subbanner-img.jpg" alt="subbanner">
    <div class="subbanner_overlay"></div>
  </section>
</template>


<script>
export default {
  data() {
    return {
      img: this.img_url
    };
  },
  props: {
    img_url: String,
    title: {
      type: String,
      default: "Text for subbanner"
    }
  },
  created() {
    console.log(this.img);
  }
};
</script>
