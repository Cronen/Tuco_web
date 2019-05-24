<template>
  <div id="case">
    <subbanner title="Cases"/>
    <section class="section_padding">
      <b-container v-if="this.case">
        <b-row>
          <b-col>
            <CaseHead :title="this.case.title" :img_url="get_img_url(this.case)" :date="get_date()"/>
          </b-col>
        </b-row>
        <b-row v-html="this.get_article_html()"></b-row>
      </b-container>
      <b-container v-else>
        <b-row>
          <b-col cols="1" class="mx-auto">
            <Loader/>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="morelike_section">
      <b-container>
        <b-row>
          <b-col class="mb-50">
            <h2 class="subpage_title">Other articles you may like:</h2>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row v-if="!loading">
          <b-col cols="12" md="6" lg="4" v-for="c in related_array" :key="c.id">
            <MoreArticle :img_url="get_img_url(c)" :title="c.title" :id="c.id"/>
          </b-col>
        </b-row>
        <b-row v-else>
          <b-col cols="1" class="mx-auto">
            <Loader/>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import CaseHead from "~/components/CaseHead.vue";
import MoreArticle from "~/components/MoreArticle.vue";
import Loader from "~/components/Loader.vue";
import Strapi from "strapi-sdk-javascript";
import showdown from "showdown";
const strapi_url = process.env.StrapiUrl;
const strapi = new Strapi(strapi_url);

//Bind classes to html tags here
const classMap = {
  h1: "col-12",
  h2: "col-12",
  h3: "col-12",
  h4: "col-12",
  img: "col-5 p-0",
  iframe: "col-12 mx-auto",
  p: "px-3"
};

const bindings = Object.keys(classMap).map(key => ({
  type: "output",
  regex: new RegExp(`<${key}(.*)>`, "g"),
  replace: `<${key} class="${classMap[key]}" $1>`
}));

const converter = new showdown.Converter({
  extensions: [...bindings]
});

export default {
  data() {
    return {
      loading: true,
      related_array: null
    };
  },
  components: {
    Loader,
    subbanner,
    CaseHead,
    MoreArticle
  },
  created() {
    this.get_related_article();
  },
  async asyncData(context) {
    return {
      case: await strapi.request("get", "/cases/" + context.params.id)
    };
  },
  methods: {
    get_article_html() {
      return converter.makeHtml(this.case.article);
    },
    get_img_url(the_case) {
      return strapi_url + the_case.case_image.url;
    },
    get_date() {
      let d = new Date(this.case.createdAt);
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
    },
    async get_related_article() {
      this.loading = true;
      this.related_array = await strapi.request("get", "/cases?_sort=createdAt:DESC&_id_ne="+this.case.id+"&_limit=3").then(this.loading=false);
    }
  }
};
</script>

<style>
</style>
