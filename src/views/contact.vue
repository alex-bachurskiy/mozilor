<template>
    <div class="contact">
        <ContactBanner/>
        <ContactForm/>
        <Footer/>
    </div>
</template>

<script>
import ContactBanner from "../components/Contact-banner.vue";
import ContactForm from "../components/Contact-form.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "products__page",
    components: {
        ContactBanner,
        ContactForm,
        Footer
    }
};
</script>