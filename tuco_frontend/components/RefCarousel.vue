<template>
<<<<<<< HEAD
  <div id="Items">
    <carousel>
      <b-col class="review_wrapper">
=======
  <div>
    <carousel items="2">
      <div class="review_wrapper">
>>>>>>> fc00a35bfce7707555b0b6ebeaab50ab070aca21
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
<<<<<<< HEAD
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
=======
      </div>
       <div class="review_wrapper">
>>>>>>> fc00a35bfce7707555b0b6ebeaab50ab070aca21
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
<<<<<<< HEAD
      </b-col>
=======
      </div>
>>>>>>> fc00a35bfce7707555b0b6ebeaab50ab070aca21
    </carousel>
  </div>
</template>

<script>
<<<<<<< HEAD
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
=======
//Read more about component here https://www.npmjs.com/package/vue-owl-carousel
import carousel from "vue-owl-carousel";

export default {
  components: { carousel }
>>>>>>> fc00a35bfce7707555b0b6ebeaab50ab070aca21
};
</script>

