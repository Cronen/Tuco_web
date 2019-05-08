<template>
  <article class="casecard border-white">
      <div class="casecard">
         <img :src="case_img" alt="case_img">
         <h4>{{this.case.title}}</h4>
      </div>
  </article>
</template>

<script>
//:style="'background-image: http://localhost:1337' + this.case.case_image.url"
export default {
  data() {
    return {
        case_img: 'http://localhost:1337' + this.case.case_image.url
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
