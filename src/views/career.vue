<template>
    <div class="career">
        <CareerBanner/>
        <CareerInformation/>
        <Life/>
        <Recommend/>
        <Jobs/>
        <Footer/>
    </div>
</template>

<script>
import CareerBanner from "../components/Career-banner.vue";
import CareerInformation from "../components/Career-information.vue";
import Life from "../components/Life.vue";
import Recommend from "../components/Recommend.vue";
import Jobs from "../components/Jobs.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "products__page",
    components: {
        CareerBanner,
        CareerInformation,
        Life,
        Recommend,
        Jobs,
        Footer
    }
};
</script>