<template>
    <div class="about">
        <AboutBanner/>
        <Brands/>
        <Collage/>
        <Culture/>
        <Activity/>
        <Hiring/>
        <Footer/>
    </div>
</template>

<script>
import AboutBanner from "../components/About-banner.vue"
import Brands from "../components/Brands.vue";
import Collage from "../components/Collage.vue";
import Culture from "../components/Culture.vue";
import Activity from "../components/Activity.vue";
import Hiring from "../components/Hiring.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "about",
    components: {
        AboutBanner,
        Brands,
        Collage,
        Culture,
        Activity,
        Hiring,
        Footer
    }
};
</script>