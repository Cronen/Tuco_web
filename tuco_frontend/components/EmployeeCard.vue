<template>
    <div class="employee_wrapper hover_bounce">
        <div class="employee_overlay">
            <div class="employee_info">
                <h4 class="employee_name">{{this.name}}</h4>
                <p class="employee_title">{{this.title}}</p>
                <a class="employee_mail" :href="`mailto:${this.mail}?Subject=Hello%20again`"><font-awesome-icon :icon="['fas', 'envelope']"/>Send mail</a>
            </div>
        </div>
        <img v-if="img_url" class="employee_img" :src="img_url" alt="portrait">
        <img v-else class="employee_img" src="~assets/img/Jonas_Pedersen.jpg" alt="portrait">
    </div>
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    mail: String,
    img_url: String
  },
  created(){
    console.log(this.name);
  }
}
</script>