<template>
  <article class="casecard hover_bounce">
    <button class="bookmark_btn"><font-awesome-icon :icon="['fas', 'plus']"/></button>
    <nuxt-link class="casecard" :to="{path: '/cases/'+this.case.id}">
      <img class="case_img" :src="case_img" alt="">
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
  }
};
</script>

<style>
</style>
