<template>
    <div>
        <carousel>
            <b-row>
                <b-col class="review_wrapper">
                    <div class="review_img">
                        <img src="~assets/img/review2.jpg" alt="">
                    </div>
                    <div class="review_textwrapper">
                        <h4 class="review_name">Jan Johansen</h4>
                        <span class="review_company">IXblue</span>
                        <p class="review_text">Lorem ipsum dolor sit amet, consectetur adiut labore et dolore magna aliqua. </p>
                    </div>
                </b-col>
            </b-row>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
    components: { carousel },
        
    }

</script>

