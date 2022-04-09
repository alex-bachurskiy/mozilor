<template>
    <div class="products__page">
        <ProductsBanner/>
        <CookieYes/>
        <Webtoffee/>
        <Future/>
        <Footer/>
    </div>
</template>

<script>
import ProductsBanner from "../components/Products-banner.vue";
import CookieYes from "../components/CookieYes.vue";
import Webtoffee from "../components/Webtoffee.vue";
import Future from "../components/Future.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "products__page",
    components: {
        ProductsBanner,
        CookieYes,
        Webtoffee,
        Future,
        Footer
    }
};
</script>