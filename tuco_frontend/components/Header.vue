<template>
  <div>
    <header>
      <div class="container-fluid top_bar">
        <div class="row">
          <div class="col">
            <div class="tuco_navbar">
              <ul class="header-contact">
                <li><font-awesome-icon :icon="['fas', 'mobile-alt']"/><a href="tel:+4570203898">+45 7020 3898</a></li>
                <li><font-awesome-icon :icon="['fas', 'envelope']"/><a href="mailto:someone@example.com?Subject=Hello%20again">mail@tuco.dk</a></li>
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
              <b-nav-item :to="{path: '/#'}">HOME</b-nav-item>
              <b-nav-item :to="{path: '/whycarbon'}">WHY CARBON ?</b-nav-item>
              <b-nav-item :to="{path: '/quality'}">QUALITY</b-nav-item>
              <b-nav-item :to="{path: '/references'}">REFERENCES</b-nav-item>
              <b-nav-item :to="{path: '/cases'}">CASES</b-nav-item>
              <b-nav-item :to="{path: '/news'}">NEWS</b-nav-item>
              <b-nav-item :to="{path: '/about'}">ABOUT TUCO</b-nav-item>
              <b-nav-item :to="{path: '/contact'}" class="btn btn-main">GET IN TOUCH</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </nav>
  </div>
</template>
        