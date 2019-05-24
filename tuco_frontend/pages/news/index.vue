<template>
    <div id="newsList">
        <subbanner title="News"/>
        <section class="section_padding">
            <b-container>
                <b-row>
                    <b-col md="7" lg="6" class="mb-80">
                        <h2 class="subpage_title">News Articles</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                    </b-col>
                </b-row>
            </b-container>
            <b-container>
                <b-row>
                    <b-col>
                        <ArticleCard/>
                    </b-col>
                </b-row>
            </b-container>
        </section>   
    </div> 
</template>

<script>
import subbanner from "~/components/subbanner.vue";
import ArticleCard from "~/components/ArticleCard.vue";

export default {
    components: {
        subbanner,
        ArticleCard
    }
}
</script>
