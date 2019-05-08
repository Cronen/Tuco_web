<!-- 404 error page -->
<template>
  <div class="row justify-content-center align-items-center p-5">
    <img src="~assets/img/error-404-boat.png" alt="404 image"/>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
  </div>
</template>
<script>
//TODO style this page
export default {
  props: ["error"],
  layout: "default"
};
</script>