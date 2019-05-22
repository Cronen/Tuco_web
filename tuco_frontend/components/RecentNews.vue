<template>
    <section class="recent_news">
        <b-container>
            <b-row>
                <b-col class="mb-80">
                    <h2>Recent news</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor. </p>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <RecentNewsList/>
                <b-col cols="12" lg="8">

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
