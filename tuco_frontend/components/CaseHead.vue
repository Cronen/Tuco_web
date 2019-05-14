<template>
  <div class="casehead_wrapper">
    <div class="casehead_share">
        <span>Share</span>
        <ul class="caseheade_shareicons">
          <li><a href=""><font-awesome-icon :icon="['fas', 'envelope']"/></a></li>
          <li><a href=""><font-awesome-icon :icon="['fab', 'facebook-f']"/></a></li>
          <li><a href=""><font-awesome-icon :icon="['fab', 'linkedin']"/></a></li>
        </ul>
    </div>
    <div class="casehead_fade">
      <div class="casehead_textwrapper">
        <h4 class="casehead_title">{{this.title}}</h4>
        <span class="casehead_date">{{this.date}}</span>
      </div>
    </div>
    <img class="casehead_img" :src="this.img_url">
  </div>
</template>

<script>
//TODO: Style this component
export default {
  props: {
    title: String,
    img_url: String,
    date: String
  }
};
</script>
