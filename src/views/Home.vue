<template>
    <div class="home">
        <Main/>
        <Brands/>
        <Product/>
        <Award/>
        <Innovation/>
        <Build/>
        <Footer/>
    </div>
</template>

<script>
import Main from "../components/Main.vue";
import Brands from "../components/Brands.vue";
import Product from "../components/Product.vue";
import Award from "../components/Award.vue";
import Innovation from "../components/Innovation.vue";
import Build from "../components/Build.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "home",
    components: {
        Main,
        Brands,
        Product,
        Award,
        Innovation,
        Build,
        Footer
    }
};
</script>
