<template>
  <div id="case">
    <subbanner title="Cases"/>
    <section class="section_padding">
      <b-container v-if="this.case">
        <b-row>
          <CaseHead :title="this.case.title" :img_url="get_img_url()" :date="get_date()"/>
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
  </div>
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import CaseHead from "~/components/CaseHead.vue";
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
    };
  },
  components: {
    Loader,
    subbanner,
    CaseHead
  },
  created() {
    console.log(this.case);
    console.log(this.get_date());
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
    get_img_url(){
      return strapi_url + this.case.case_image.url;
    },
    get_date(){
      let d = new Date(this.case.createdAt);
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
    }
  }
};
</script>

<style>
</style>
