<template>
  <div class="refcarousel">
    <carousel :autoplay="true" :loop="true" :autoplayTime="8000" :nav="false" :dots="true" :responsive="{0:{items:1},768:{items:2}}">
      <div class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review1.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Jan Johansen</h4>
          <span class="review_company">IXblue</span>
          <p class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Karsten Nielsen</h4>
          <span class="review_company">Danaos</span>
          <p class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review1.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Jan Johansen</h4>
          <span class="review_company">IXblue</span>
          <p class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Karsten Nielsen</h4>
          <span class="review_company">Danaos</span>
          <p class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: { 
    carousel
  }
}
</script>

