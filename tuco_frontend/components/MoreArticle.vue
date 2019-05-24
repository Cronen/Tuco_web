<template>
  <div>
    <article class="hover_bounce morelike_card">
      <div href="#" class="morelike_card">
        <img class="morelike_img" :src="this.img_url" alt>
        <div class="card_overlay">
          <div class="card_fade">
            <h4 class="case_title">{{this.title}}</h4>
          </div>
        </div>
      </div>
      <div class="morelike_line"></div>
    </article>
     <nuxt-link class="morelike_link" :to="{path: '/cases/'+this.id}">
      Read more
      <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    img_url: String,
    title: String,
    id: String
  }
};
</script>
