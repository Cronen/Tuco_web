<template>
  <div>
    <header>
      <div class="container-fluid top_bar">
        <div class="row">
          <div class="col">
            <div class="tuco_navbar">
              <ul class="header-contact">
                <li>+45 7020 3898</li>
                <li>mail@tuco.dk</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav class="main-navbar">
      <div class="tuco_navbar">
        <b-navbar toggleable="lg" type="dark">
          <b-navbar-brand href="/#">
            <img class="header_logo" src="~assets/img/tuco_logo.png" alt="Tuco Logo">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto menu-items">
              <b-nav-item :to="{path: '/#'}">Home</b-nav-item>
              <b-nav-item :to="{path: '/whycarbon'}">Why Carbon?</b-nav-item>
              <b-nav-item :to="{path: '/references'}">References</b-nav-item>
              <b-nav-item :to="{path: '/cases'}">Cases</b-nav-item>
              <b-nav-item :to="{path: '/news'}">News</b-nav-item>
              <b-nav-item :to="{path: '/about'}">About Tuco</b-nav-item>
              <b-nav-item :to="{path: '/contact'}" class="btn btn-main">Get in touch</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </nav>
  </div>
</template>
        