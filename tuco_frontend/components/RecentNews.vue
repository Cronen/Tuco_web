<template>
    <section class="recent_news">
        <b-container>
            <b-row>
                <b-col class="mb-80">
                    <h2 class="subpage_title">Recent news</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor. </p>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <b-col cols="12" lg="4">
                    <RecentNewsList/>
                </b-col>
                <b-col cols="12" lg="8">
                    <img src="~/assets/img/0b48acbe30999524ca3a49913345b1e9.jpg" class="recentnews_img"/>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
import RecentNewsList from "~/components/RecentNewsList.vue";

export default {
    components:{
        RecentNewsList
    }
}
</script>
