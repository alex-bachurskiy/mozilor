<template>
    <div class="home">
        <MainBanner/>
        <Brands/>
        <ProductsLine/>
        <Award/>
        <Innovation/>
        <Build/>
        <Footer/>
    </div>
</template>

<script>
import MainBanner from "../components/Main-banner.vue";
import Brands from "../components/Brands.vue";
import ProductsLine from "../components/Products-line.vue";
import Award from "../components/Award.vue";
import Innovation from "../components/Innovation.vue";
import Build from "../components/Build.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "home",
    components: {
        MainBanner,
        Brands,
        ProductsLine,
        Award,
        Innovation,
        Build,
        Footer
    }
};
</script>
