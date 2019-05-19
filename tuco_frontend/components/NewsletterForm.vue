<template>
    <section class="signup_bg">
      <!--<img src="~assets/img/signup-bg.jpg" alt="">-->
      <div class="newsform_wrapper">
        <b-container>
          <b-row>
            <b-col class="text-center">
              <h3 class="signup_title">Join Tuco Marines Newsletter</h3>
              <p class="signup_subtext">Subscribe now and get the latest boat news</p>
              <div class="input_wrapper radius_box">
                <form class="signup_form" action="">
                  <input class="signup_input" type="email" name="email" v-model.trim="email" placeholder="Enter your email adress" >
                  <button class="signup_btn" @click="open_modal"><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/></button>
                </form> 
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
        <b-modal id="mail_modal" >
           <template slot="modal-header">
             <button @click="close_promo_modal(p.id)" class="close_btn">
                <div class="close_inner">
                  <img src="~assets/img/close-icon.svg"/>
                </div>
              </button>
            <img class="modal-header-img" src="~assets/img/modal_header.png"/>
          </template>
          <template slot="default">
            {{email}}
          </template>
          <template slot="modal-footer">
            <b>Custom Footer</b>

          </template>
        </b-modal>
    </section>
</template>

<script>
import emailModal from "~/components/emailModal.vue"

export default {
  data(){
    return{
      email: ''
    }
  },
  components: {
    emailModal
  },
  created(){
    // console.log(this.email)
  },
  methods:{
    open_modal(e){
      e.preventDefault();
      this.$bvModal.show('mail_modal');
    },
    close_modal(){
      this.$bvModal.hide('mail_modal');
    }
  }
}
</script>
