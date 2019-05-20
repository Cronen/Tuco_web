<template>
  <footer class="footer_container">
    <b-container>
      <div class="footer_grid">
        <div class="footer_col follow_us">
          <a class="footer_logo" href="/"><img src="~assets/img/tuco_logo.png" alt="Tuco Logo"></a>
           <a class="footer_logo prozero_logo" a target="_blank" href="https://prozero.dk"><img src="~assets/img/prozero_logo.png" alt="Prozero Logo"></a>
          <h4 class="footer_follow">Follow Us</h4>
          <ul class="social_icons">
            <li class="social_icon"><a target="_blank" href="https://www.facebook.com/pages/Tuco-Marine-Group-ApS/250239778331751?fref=ts"><font-awesome-icon :icon="['fab', 'facebook-square']"/></a></li>
            <li class="social_icon"><a target="_blank" href="http://www.youtube.com/tucomarine"><font-awesome-icon :icon="['fab', 'youtube']"/></a></li>
            <li class="social_icon"><a target="_blank" href="http://www.linkedin.com/company/tuco-marine-aps"><font-awesome-icon :icon="['fab', 'linkedin']"/></a></li>
          </ul>
        </div>
        <div class="footer_col">
          <h4 class="footer_headline">Sitemap</h4>
          <ul>
            <li><a href="/quality">Quality</a></li>
            <li><a href="/references">References</a></li>
            <li><a href="/cases">Cases</a></li>
            <li><a href="news">News</a></li>
            <li><a href="about">About Tuco</a></li>
          </ul>
        </div>
        <div class="footer_col">
          <h4 class="footer_headline">Information</h4>
          <ul class="bottom-0">
            <li><a href="https://prozero.dk/about_prozero/" target="_blank">About Prozero</a></li>
            <li><a href="https://prozero.dk/workboats/" target="_blank">Work Boats</a></li>
            <li><a href="https://prozero.dk/defence-boats/" target="_blank">Defence Boats</a></li>
            <li><a href="https://prozero.dk/offshore-boats/" target="_blank">Offshore Boats</a></li>
            <li><a href="https://prozero.dk/file-camp/" target="_blank">File Camp</a></li>
          </ul>
        </div>
        <div class="footer_col">
          <h4 class="footer_headline">Contact</h4>
          <ul class="bottom-0">
            <li>Krogsbjergvej 2 <br> DK-5600 Faaborg</li>
            <li><a href="tel:+4570203898">+45 7020 3898</a></li>
            <li><a href="mailto:someone@example.com?Subject=Hello%20again">mail@tuco.dk</a></li>
          </ul>
        </div>
      </div>
    </b-container>
  </footer>
</template>
