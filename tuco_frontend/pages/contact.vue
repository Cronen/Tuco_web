<template>
  <div id="contact">
    <subbanner title="Contact"/>
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
                <h4 class="contact_title">Phone number</h4>
                <a href="tel:+4570203898">+45 7020 3898</a>
              </div>
              <div class="location_mail">
                <h4 class="contact_title">Email</h4>
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
              <iframe src="https://snazzymaps.com/embed/155245" width="100%" height="100%" style="border:none;"></iframe>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row>
          <b-col>
            <h4 class="mb-50">The people behind Tuco</h4>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row>
          <b-col cols="12" sm="6" lg="4">
            <EmployeeCard/>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <ContactForm/>
  </div>
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import EmployeeCard from "~/components/EmployeeCard.vue";
import ContactForm from "~/components/ContactForm.vue";

export default {
  components: {
    subbanner,
    EmployeeCard,
    ContactForm
  }
}
</script>
