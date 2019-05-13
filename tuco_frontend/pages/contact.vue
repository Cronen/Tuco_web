<template>
  <!--
  <div class id="contact">
    <div class>
      <div class="contact-box col-md-8">
        <div class="p-md-5">
           <h2 class="boldtext h3">Kontakt
            <span class="colorgreentext">information</span>
          </h2>
          <p>
            Tuco Marine ApS <br>
Krogsbjergvej 2 <br>
DK-5600 Faaborg.
            <br>
          </p>
          <p>
            <a class="boldtext" href="tel:+4570203898">Tlf. +45 7020 3898</a>
            <br>
            <a class="boldtext" href="mailto:Lvsinfo@lavs.dk">mail@tuco.dk</a>
            <br>EAN-nr. xxxxxxxxxxx
            <br>Cvr.nr. xxxxxxx
          </p>
          <p>
            <strong class="colorgreentext">Åbningstider:</strong>
            <br>Alle dage fra. 08.00 – 16.00
            <br>Undtagen Lørdage og Søndage (Lukket)
          </p>
        </div>
      </div>
     
    </div>
  </div>
  -->

  <div id="contact">
    <subbanner/>
    <section class="section_padding_extra">
      <b-container>
        <b-row class="relative">
          <b-col cols="12" class="location_info">
              <div class="location_address">
                <h2 class="adress_title">Tuco - Krogsbjergvej 2</h2>
                <ul>
                  <li>5600 Faaborg</li>
                  <li>Denmark</li>
                </ul>
              </div>
              <div class="location_phone">
                <h4>Phone number</h4>
                <a href="tel:+4570203898">+45 7020 3898</a>
              </div>
              <div class="location_mail">
                <h4>Email</h4>
                <a href="mailto:someone@example.com?Subject=Hello%20again">mail@tuco.dk</a>
              </div>
              <div class="location_media">
                <ul>
                  <li class="location_media_icon"><a target="_blank" href="https://www.facebook.com/pages/Tuco-Marine-Group-ApS/250239778331751?fref=ts"><font-awesome-icon :icon="['fab', 'facebook-f']"/></a></li>
                  <li class="location_media_icon"><a target="_blank" href="http://www.youtube.com/tucomarine"><font-awesome-icon :icon="['fab', 'youtube']"/></a></li>
                  <li class="location_media_icon"><a target="_blank" href="http://www.linkedin.com/company/tuco-marine-aps"><font-awesome-icon :icon="['fab', 'linkedin-in']"/></a></li>
                </ul>
              </div>
          </b-col>
          <b-col cols="12" class="map_location">
              <iframe frameborder="0" allowfullscreen
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9128.103665226527!2d10.218865!3d55.112819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x113b659355105862!2sTuco+Yacht+Shipyard+Ltd.!5e0!3m2!1sen!2sus!4v1550659258534" style="border:0" width="100%" height="100%">
              </iframe>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h4>The people behind Tuco</h4>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col cols="12" md="3" lg="4">
            <EmployeeCard/>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section_padding">

    </section>
  </div>
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import EmployeeCard from "~/components/EmployeeCard.vue";

export default {
  components: {
    subbanner,
    EmployeeCard
  }
}
</script>
