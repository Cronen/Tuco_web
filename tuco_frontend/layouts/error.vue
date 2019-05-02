<!-- 404 error page -->
<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Back</nuxt-link>
  </div>
</template>
<script>
//TODO style this page
export default {
  props: ["error"],
  layout: "default"
};
</script>