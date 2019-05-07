<template>
  <header class="header_container container-fluid">
    <div class="row top_bar">
      <div class="col">Phone</div>
      <div class="col">Email</div>
    </div>
    <div class="row tuco_navbar">
      <div class="col">
        <!-- Trying to use https://bootstrap-vue.js.org/docs/components/navbar/ -->
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-brand href="#">
            <img class="header_logo" src="~assets/img/tuco_logo.png" alt="Tuco Logo">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-nav-item active>
                <nuxt-link :to="{path: '/'}">Home</nuxt-link>
              </b-nav-item>
              <b-nav-item active>
                <nuxt-link :to="{path: '/carbon'}">Why Carbon?</nuxt-link>
              </b-nav-item>
              <b-nav-item active>
                <nuxt-link :to="{path: '/references'}">References</nuxt-link>
              </b-nav-item>
              <b-nav-item active>
                <nuxt-link :to="{path: '/cases'}">Cases</nuxt-link>
              </b-nav-item>
              <b-nav-item active>
                <nuxt-link :to="{path: '/news'}">News</nuxt-link>
              </b-nav-item>
              <b-nav-item active>
                <nuxt-link :to="{path: '/about'}">About Tuco</nuxt-link>
              </b-nav-item>
              <b-nav-item active>
                  <!-- TODO: Create get in touch button -->
                <nuxt-link :to="{path: '/contact'}">Get in touch</nuxt-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </header>
</template>
        