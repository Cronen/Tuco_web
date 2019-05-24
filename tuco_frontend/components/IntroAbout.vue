<template>
  <div>
    <section class="intro_section">
      <b-container>
        <b-row class="justify-content-center">
          <b-col cols="12" md="10" lg="8">
            <h2 class="front_title text-center">Classification Projects</h2>
            <p
              class="intro_subtext"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="story_section">
      <b-container>
        <b-row class="relative">
          <b-col cols="12" md="12" class="story_img_wrapper">
            <img class="story_img_1" src="~assets/img/story-img1.jpg" alt="">
            <div class="story_img_inner">
              <img src="~assets/img/story-img2.jpg" alt="">
            </div>
          </b-col>
          <b-col cols="12" md="12" lg="6" class="story_text_wrapper">
            <h2 class="front_title">Tuco Marine Group</h2>
            <div class="story_text">
              <p class="mb-20">At Tuco Marine Group we specialize in light structures and hulls manufactured with composite materials such as carbon fibre. Tuco supplies a range of different composite structures for the shipping industry and other industries where low weight and strength are important factors.</p>
              <p>In 1998 when the company was founded it was a traditional yard and the main business area was sailing boats. Today focus has shifted to the construction of large structures primarily in the commercial maritime sector.</p>
            </div>
            <nuxt-link :to="{path: '/about'}" class="btn btn-link-border">
              Full story
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {};
</script>
