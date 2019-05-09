<!-- 404 error page -->
<template>
  <section class="section_padding">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <img src="~assets/img/error-404-boat.png" alt="404 image"/>
        <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else>An error occurred</h1>
      </div>
    </div>
  </section>
</template>
<script>
//TODO style this page
export default {
  props: ["error"],
  layout: "default"
};
</script>