<template>
  <!-- <div id="articleList">
    <b-row>
      <b-col xs="12" md="5" lg="6" class="article_imgwrapper">
        <img src="~assets/img/0b48acbe30999524ca3a49913345b1e9.jpg" alt>
      </b-col>
      <b-col xs="12" md="7" lg="6" class="article_textwrapper">
        <div class="article_inner">
          <span class="article_label date_label">News post</span>
          <div class="article_meta">
            <div class="article_timestamp">
              <span>
                <time>March 8 2019 13.49 pm</time>
              </span>
            </div>
            <ul class="article_share">
              <li class="article_icon">
                <a
                  target="_blank"
                  href="https://www.facebook.com/pages/Tuco-Marine-Group-ApS/250239778331751?fref=ts"
                >
                  <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                </a>
              </li>
              <li class="article_icon">
                <a target="_blank" href="http://www.linkedin.com/company/tuco-marine-aps">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                </a>
              </li>
              <li class="article_icon">
                <a target="_blank" href="http://www.youtube.com/tucomarine">
                  <font-awesome-icon :icon="['fas', 'envelope']"/>
                </a>
              </li>
            </ul>
          </div>
          <h2 class="article_title">
            <a href="#">Eleanor - 12m demonstrator for sale.</a>
          </h2>
          <p
            class="article_introtext"
          >Our 12m light pilot classed “Eleanor” is now offered for sale after a successful charter. Full specifications, General Arrangement as well as asking price can be obtained by contacting our team as...</p>
        </div>
      </b-col>
    </b-row>
  </div>-->

  <div id="articleList">
    <b-row>
      <b-col xs="12" md="5" lg="6" class="article_imgwrapper">
        <img :src="img_url" alt>
      </b-col>
      <b-col xs="12" md="7" lg="6" class="article_textwrapper">
        <div class="article_inner">
          <span class="article_label date_label">News post</span>
          <div class="article_meta">
            <div class="article_timestamp">
              <span>
                <time>{{date}}</time>
              </span>
            </div>
            <ul class="article_share">
              <li class="article_icon">
                <a
                  target="_blank"
                  href="https://www.facebook.com/pages/Tuco-Marine-Group-ApS/250239778331751?fref=ts"
                >
                  <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                </a>
              </li>
              <li class="article_icon">
                <a target="_blank" href="http://www.linkedin.com/company/tuco-marine-aps">
                  <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                </a>
              </li>
              <li class="article_icon">
                <a target="_blank" href="http://www.youtube.com/tucomarine">
                  <font-awesome-icon :icon="['fas', 'envelope']"/>
                </a>
              </li>
            </ul>
          </div>
          <h2 class="article_title">
            <a :href="link_url" target="_blank">{{title}}</a>
          </h2>
          <p class="article_introtext">{{intro_txt}}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Strapi from "strapi-sdk-javascript";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

export default {
  props: {
    img_url: String,
    date: String,
    title: String,
    intro_txt: String,
    link_url: String
  }
};
</script>
