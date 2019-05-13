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
    <section class="section_padding">
      <b-container>
        <b-row>
          <b-col>
            <div class="map_location">
              <iframe frameborder="0" allowfullscreen
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9128.103665226527!2d10.218865!3d55.112819!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x113b659355105862!2sTuco+Yacht+Shipyard+Ltd.!5e0!3m2!1sen!2sus!4v1550659258534" style="border:0" width="100%" height="100%">
              </iframe>
            </div>
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
