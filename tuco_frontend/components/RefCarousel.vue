<template>
  <div id="Items">
    <carousel>
      <b-col class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Jan Johansen</h4>
          <span class="review_company">IXblue</span>
          <p
            class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </b-col>
      <b-col class="review_wrapper item">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper item">
          <h4 class="review_name">Jan Johansen</h4>
          <span class="review_company">IXblue</span>
          <p
            class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </b-col>
      <b-col class="review_wrapper item">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper item">
          <h4 class="review_name">Jan Johansen</h4>
          <span class="review_company">IXblue</span>
          <p
            class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </b-col>
      <b-col class="review_wrapper">
        <div class="review_img">
          <img src="~assets/img/review2.jpg" alt>
        </div>
        <div class="review_textwrapper">
          <h4 class="review_name">Jan Johansen</h4>
          <span class="review_company">IXblue</span>
          <p
            class="review_text"
          >Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua.</p>
        </div>
      </b-col>
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  components: {
    carousel
  },
  method: {
    installOwlCarousel: function() {
      $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 900,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                nav: true,
                loop: false,
                margin: 20
            }
        }
      });
    }
  }
};
</script>

