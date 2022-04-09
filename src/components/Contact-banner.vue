<template>
    <div class="contact__banner">
        <Header/>
        <div class="container">
            <div class="contact__banner__container">
                <div class="contact__banner__info__container">
                    <h1 class="contact__banner__info__title">
                        Connect with us
                    </h1>
                    <p class="contact__banner__info__paragraph">
                        We’d love to hear from you. Fill out this form and we’ll get back to you. 
                        For job related queries, click on the button below.
                    </p>
                    <div class="contact__button btn transperent__btn__style">
                        Work with us
                    </div>
                </div>
                <div class="contact__banner__pictures__container">
                    <img class="contact__banner__img" src="@/assets/pictures/contact__banner.png" alt="contact__banner">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
    name: "home",
    components: {
        Header
    }
};
</script>

<style lang="scss" scoped>
.contact__banner {
    background: linear-gradient(247.11deg, #E3E7F6 3.56%, rgba(227, 231, 246, 0) 115.17%);

    &__container {
        align-items: center;
        display: flex;
        justify-content: space-between;
        max-width: 1396px;
        margin: 0 auto;
        .contact__banner__info__container {
            max-width: 470px;

            .contact__banner__info__title {
                margin-bottom: 40px;
            }

            .contact__banner__info__paragraph {
                margin-bottom: 40px;
            }

            .contact__button {
                max-width: 163px;
            }
        }
    }
}
</style>