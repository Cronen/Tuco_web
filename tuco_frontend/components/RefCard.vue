<template>
  <article class="ref_logo hover_bounce">
    <a :href="this.reference.ref_url" target="_blank">
      <img class="ref_logo_img" :src="ref_img" :alt="this.reference.ref_name">
    </a>
  </article>
</template>

<script>
const strapi_url = process.env.StrapiUrl;

export default {
  data() {
    return {
      ref_img: strapi_url + this.reference.ref_logo.url
    };
  },
  props: {
    reference: Object
  },
  created() {
    console.log(this.reference);
  }
};
</script>

<style>
</style>
