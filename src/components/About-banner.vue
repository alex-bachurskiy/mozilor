<template>
    <div class="about__banner">
        <Header/>
        <div class="container">
            <div class="about__banner__container">
                <div class="about__banner__info__container">
                    <h1 class="about__banner__info__title">
                        About Mozilor
                    </h1>
                    <p class="about__banner__info__paragraph">
                        Mozilor is a technology company that builds products to simplify work. 1.3 million businesses of 
                        every size — from startups to global brands, use our tools to work better. 
                    </p>
                </div>
                <div class="about__banner__pictures__container">
                    <img class="about__img" src="@/assets/pictures/about.png" alt="about__banner">
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
.about__banner {
    background: linear-gradient(247.11deg, #E3E7F6 3.56%, rgba(227, 231, 246, 0) 115.17%);

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 10px;        
        max-width: 1356px;
        margin: 0 auto;

        .about__banner__info__container {
            max-width: 447px;

            .about__banner__info__title {
                font-size: 48px;
                line-height: 62px;
                margin-bottom: 32px;
            }
            .about__banner__info__paragraph {
                font-size: 28px;
                line-height: 36px;
            }
        }
    }
}
</style>