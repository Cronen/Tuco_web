<template>
  <section>
    <b-container fluid>
      <b-row>
        <b-col cols="8">
          <ArticleCard/>
        </b-col>
        <b-col cols="2">
          <div
            class="fb-page"
            data-href="https://www.facebook.com/TucoMarine/"
            data-tabs="timeline"
            data-width
            data-height
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote cite="https://www.facebook.com/TucoMarine/" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/TucoMarine/">Tuco Marine Group ApS</a>
            </blockquote>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div id="fb-root"></div>
    <script
      async
      defer
      crossorigin="anonymous"
      src="https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v3.3&appId=402315907255090&autoLogAppEvents=1"
    ></script>
  </section>
</template>

<script>
import ArticleCard from "~/components/ArticleCard.vue";

export default {
  layout(context) {
    return "tv";
  },
  components: {
    ArticleCard
  }
};
</script>
