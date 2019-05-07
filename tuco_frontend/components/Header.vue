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
              <b-nav-item :to="{path: '/#'}">Home</b-nav-item>
              <b-nav-item :to="{path: '/carbon'}">Why Carbon?</b-nav-item>
              <b-nav-item :to="{path: '/references'}">References</b-nav-item>
              <b-nav-item :to="{path: '/cases'}">Cases</b-nav-item>
              <b-nav-item :to="{path: '/news'}">News</b-nav-item>
              <b-nav-item :to="{path: '/about'}">About Tuco</b-nav-item>
              <b-nav-item :to="{path: '/contact'}" class="get_in_touch_btn">Get in touch</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </header>
</template>
        