<template>
  <article class="casecard border-white">
    <nuxt-link class="casecard" :to="{path: '/cases/'+this.case.id}">
      <img :src="case_img" alt="case_img">
      <h4>{{this.case.title}}</h4>
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
