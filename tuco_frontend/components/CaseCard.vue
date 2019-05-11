<template>
  <article class="casecard">
    <button class="bookmark_btn"><font-awesome-icon :icon="['fas', 'plus']"/></button>
    <nuxt-link class="casecard" :to="{path: '/cases/'+this.case.id}">
      <img class="radius_box" :src="case_img" alt="case_img">
      <div class="card_overlay">
        <div class="card_fade">
          <h4 class="case_title">{{this.case.title}}</h4>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
const strapi_url = process.env.StrapiUrl;

export default {
  data() {
    return {
      case_img: strapi_url + this.case.case_image.url
    };
  },
  props: {
    case: Object
  },
  created() {
    console.log(this.case);
  }
};
</script>

<style>
</style>
