<template>
  <div>
    <div class="navbar-wrapper">
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
        <b-navbar-brand href="/">
          <img class="header_logo" src="~assets/img/tuco_logo.png" alt="Tuco Logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="ml-auto menu-items">
            <b-nav-item :to="{path: '/'}">Home</b-nav-item>
            <b-nav-item :to="{path: '/quality'}">Quality</b-nav-item>
            <b-nav-item :to="{path: '/references'}">References</b-nav-item>
            <b-nav-item :to="{path: '/cases'}">Cases</b-nav-item>
            <b-nav-item :to="{path: '/news'}">News</b-nav-item>
            <b-nav-item :to="{path: '/about'}">About Tuco</b-nav-item>
            <b-nav-item :to="{path: '/contact'}" class="btn btn-main">Get in touch</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>
<script>
  export default {
    mounted() {
       this.setupMailchimpPopup() 
    },
    methods: {
      setupMailchimpPopup () {
          var mailchimpConfig = {
              baseUrl: 'mc.us3.list-manage.com',
              uuid: '3e88e027773776d95a845e4f1',
              lid: '52f6ddc33c'
          };
          // No edits below this line are required
          var chimpPopupLoader = document.createElement("script");
          chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js';
          chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false');
          var chimpPopup = document.createElement("script");
          chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +  mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'));
          
          chimpPopupLoader.onload = function() {
            document.body.appendChild(chimpPopup);
          }
          document.body.appendChild(chimpPopupLoader);
          
      }
    }
  }
</script>
        