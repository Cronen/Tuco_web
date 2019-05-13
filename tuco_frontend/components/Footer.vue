<template>
  <footer class="footer_container">
    <b-container>
      <b-row>
        <b-col cols="12" md="6" lg="3" xl="6" class="follow_us">
          <a class="footer_logo" href="/"><img src="~assets/img/tuco_logo.png" alt="Tuco Logo"></a>
          <h4>Follow Us</h4>
          <ul class="social_icons">
            <li class="social_icon"><a target="_blank" href="https://www.facebook.com/pages/Tuco-Marine-Group-ApS/250239778331751?fref=ts"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
            <li class="social_icon"><a target="_blank" href="http://www.youtube.com/tucomarine"><font-awesome-icon :icon="['fab', 'youtube']"/></a></li>
            <li class="social_icon"><a target="_blank" href="http://www.linkedin.com/company/tuco-marine-aps"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="3" xl="2">
          <h4 class="footer_headline">Sitemap</h4>
          <ul>
            <!-- <li><a href="#">Welcome</a></li> -->
            <li><a href="/whycarbon">Why Carbon?</a></li>
            <li><a href="/references">References</a></li>
            <li><a href="/cases">Cases</a></li>
            <li><a href="news">News</a></li>
            <li><a href="about">About Tuco</a></li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="3" xl="2">
          <h4 class="footer_headline">Information</h4>
          <ul class="bottom-0">
            <li><a href="https://prozero.dk/about_prozero/" target="_blank">About Prozero</a></li>
            <li><a href="https://prozero.dk/workboats/" target="_blank">Work Boats</a></li>
            <li><a href="https://prozero.dk/defence-boats/" target="_blank">Defence Boats</a></li>
            <li><a href="https://prozero.dk/offshore-boats/" target="_blank">Offshore Boats</a></li>
            <li><a href="https://prozero.dk/file-camp/" target="_blank">File Camp</a></li>
          </ul>
        </b-col>
        <b-col cols="12" md="6" lg="3" xl="2">
          <h4 class="footer_headline">Contact</h4>
          <ul class="bottom-0">
            <li>Krogsbjergvej 2 <br> DK-5600 Faaborg</li>
            <li><a href="tel:+4570203898">+45 7020 3898</a></li>
            <li><a href="mailto:someone@example.com?Subject=Hello%20again">mail@tuco.dk</a></li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>
