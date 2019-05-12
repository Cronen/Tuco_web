<template>
    <section class="signup_bg">
      <!--<img src="~assets/img/signup-bg.jpg" alt="">-->
      <div class="newsform_wrapper">
        <b-container>
          <b-row>
            <b-col class="text-center">
              <h4 class="signup_title">Join Tuco Marines Newsletter</h4>
              <p class="signup_subtext">Subscribe now and get the latest boat news</p>
              <div class="input_wrapper radius_box">
                <form class="signup_form" action="">
                  <input class="signup_input" type="email" name="email" placeholder="Enter your email adress">
                  <button class="signup_btn" type="submit"><font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/></button>
                </form> 
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </section>
</template>

