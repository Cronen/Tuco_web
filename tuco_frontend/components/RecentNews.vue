<template>
    <section>
        <b-container>
            <b-row>
                <b-col>
                    <h2>Recent news articles</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor. </p>
                </b-col>
            </b-row>
        </b-container>
        <b-container>
            <b-row>
                <RecentNewsList/>
                <b-col></b-col>
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
