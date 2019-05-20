<template>
  <div id="about">
    <subbanner title="About Tuco"/>
    <section class="section_padding">
      <b-container>
        <b-row>
          <b-col>
            <blockquote class="mb-40">
              We are founded by entrepreneurs who are innovative and who want to continue being so, by developing and delivering products that weight less, saves fuels and affects our environment less.
            </blockquote>
            <cite class="about_cite">Jonas Pedersen</cite>
            <span class="about_spoke">CEO-Founder</span>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section>
      <b-container>
        <b-row class="align-items-md-center">
          <b-col cols="12" md="6" lg="7" class="about_mainimg">
            <div class="aboutimg_wrapper"><img src="../assets/img/about1.png" alt></div>
            <div class="aboutimg_wrapper"><img src="../assets/img/about2.png" alt></div>
          </b-col>
          <b-col cols="12" md="6" lg="5">
            <h4 class="mb-30 about_comapny_title">Main Title Here</h4>
            <p>At Tuco Marine Group we specialize in light structures and hulls manufactured with composite materials such as carbon fibre. Tuco supplies a range of different composite structures for the shipping industry and other industries where low weight and strength are important factors.</p>
            <p>Tuco Yacht Yard, which is part of Tuco Marine Group offers custom-built ships, but also repairs, maintenance and all kinds of different jobs in composite materials. The work can be performed at Tuco’s facilities in Faaborg or wherever the customer is.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="twoin_section">
      <b-container>
        <b-row>
          <b-col cols="12" class="mb-80">
            <h4 class="mb-40 twoin_title">At Tuco it is not just all about business - it’s very personal</h4>
            <p>When you meet the two founders of the company Jakob and Jonas even though they are both busy leaders they are always attentive and participating. This makes for a strong and present leadership. When asked about keywords in their leadership they both agree that creativity, quality and drive have always been some of the most important values. Everyone who works for Tuco are more than willing to stay long after normal hours when there is a need for it – that is the Tuco spirit. Together we will get the job done – and we will do it well.</p>
            <p>“The spirit at Tuco is and must be that we are always there for our customers - both as owners, leaders and workers. This attitude has to be tangible and present in our everyday work. We aim to deliver products and projects of the highest possible quality on schedule. This is our pledge to our customers nationally as well as internationally”, Jonas Pedersen concludes.</p>
          </b-col>
          <b-col cols="12">
            <h5 class="mb-30 left_border">Two-in-company</h5>
            <p>After the first years, Jakob Frost and Jonas Pedersen decided to change the name of the company. They wanted to market the company on an international level and the name was not well suited for this task. In collaboration with a local advertising agency, it was decided that the new name should be Tuco – short for two-in-company. Short and easy to pronounce in more languages.</p>
            <p>Through the years Tuco has been involved in many different projects. Tuco has taken part in manufacturing a one-off luxury yacht in collaboration with Royal Denship in Aarhus, produced sailing boats in the Impala-series, delivered vessels for rescue services, patrolling vessels for police and military. Tuco has manufactured moulds for the windmill industry and exhibition objects for a big Danish toy company. Furthermore, Tuco is a subcontractor for several industrial companies.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section_padding history_section">
      <b-container>
        <b-row>
          <b-col>
            <h5 class="left_border history_title">Our history</h5>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row class="align-items-md-center">
          <b-col cols="12" md="6">
            <h3 class="mb-40 timeline_title">The change of focus in the production to composite materials was further accelerated in 2009</h3>
            <p>Tuco won a tender on the construction of hulls for three carbon fibre ferries for the Norwegian commercial sector. The task now was to manufacture three 35-meter carbon fibre hull structures that were ready for outfitting.</p>
          </b-col>
          <b-col cols="12" md="6" class="history_img_wrapper">
            <img src="../assets/img/about4.png" alt>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="vision_qoute">
      <b-container>
        <b-row>
          <b-col>
            <blockquote class="vision_quoute">
              We deliver products that through weight savings and unique advantages offer our customers solutions that will save them money in their operations, and will offer significant improvements in the way they affect the environment.
            </blockquote>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="section_padding">
      <b-container>
        <b-row class="align-items-md-center">
          <b-col cols="12" md="6">
            <img src="../assets/img/about3.png" alt>
          </b-col>
          <b-col cols="12" md="6">
            <togglecollapsible/>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import togglecollapsible from "~/components/togglecollapsible.vue";

export default {
  components: {
    subbanner,
    togglecollapsible
  }
};
</script>