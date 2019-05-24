<template>
    <div>
        <ul class="recent_list">
            <li><a href="#">Rand Boats Design your boat.</a></li>
            <li><a href="#">Enjoy you summer on a city boat.</a></li>
            <li><a href="#">Releasing new 18m ASV design.</a></li>
        </ul>
        <nuxt-link :to="{path: '/news'}" class="btn btn-link-border">
            Read more
        <font-awesome-icon :icon="['fas', 'long-arrow-alt-right']"/>
        </nuxt-link>
    </div>
</template>

<script>
export default {

}
</script>
d