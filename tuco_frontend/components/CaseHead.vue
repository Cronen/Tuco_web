<template>
  <div class="Case_header">
    <img :src="this.img_url">
    <div class="share_container">
        <font-awesome-icon :icon="['fas', 'envelope']" color="red"/>
        <font-awesome-icon :icon="['fab', 'facebook-f']" color="red"/>
        <font-awesome-icon :icon="['fab', 'linkedin']" color="red"/>
    </div>
    <div class>
      <div class>
        <h4 class="Acase_title">{{this.title}}</h4>
        <p class="Acase_date">{{this.date}}</p>
      </div>
    </div>
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
