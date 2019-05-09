<template>
  <div>
    <header>
      <div class="container-fluid top_bar">
        <div class="row">
          <div class="col">
            <ul class="header-contact">
              <li><font-awesome-icon :icon="['fas', 'mobile-alt']"/><a href="tel:+4570203898">+45 7020 3898</a></li>
              <li><font-awesome-icon :icon="['fas', 'envelope']"/><a href="mailto:someone@example.com?Subject=Hello%20again">mail@tuco.dk</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
        <b-navbar toggleable="lg" type="dark" class="main_bar">
          <b-navbar-brand href="#">
            <img class="header_logo" src="~assets/img/tuco_logo.png" alt="Tuco Logo">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

          <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto menu-items">
<<<<<<< HEAD
              <b-nav-item :to="{path: '/'}">Home</b-nav-item>
              <b-nav-item :to="{path: '/whycarbon'}">Why Carbon?</b-nav-item>
              <b-nav-item :to="{path: '/references'}">References</b-nav-item>
              <b-nav-item :to="{path: '/cases'}">Cases</b-nav-item>
              <b-nav-item :to="{path: '/news'}">News</b-nav-item>
              <b-nav-item :to="{path: '/about'}">About Tuco</b-nav-item>
              <b-nav-item :to="{path: '/contact'}" class="btn btn-main">Get in touch</b-nav-item>
=======
              <b-nav-item :to="{path: '/#'}">HOME</b-nav-item>
              <b-nav-item :to="{path: '/whycarbon'}">WHY CARBON ?</b-nav-item>
              <b-nav-item :to="{path: '/quality'}">QUALITY</b-nav-item>
              <b-nav-item :to="{path: '/references'}">REFERENCES</b-nav-item>
              <b-nav-item :to="{path: '/cases'}">CASES</b-nav-item>
              <b-nav-item :to="{path: '/news'}">NEWS</b-nav-item>
              <b-nav-item :to="{path: '/about'}">ABOUT TUCO</b-nav-item>
              <b-nav-item :to="{path: '/contact'}" class="btn btn-main">GET IN TOUCH</b-nav-item>
>>>>>>> 262dd93c8b20f957fa571ff97d93330311cb4bc2
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
  </div>
</template>
        