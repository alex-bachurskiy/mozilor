<template>
    <div class="products__banner">
        <Header/>
        <div class="container">
            <div class="products__banner__container">
                <div class="products__banner__info__container">
                    <h1 class="products__banner__info__title">
                        Tools that transform how businesses work
                    </h1>
                    <p class="products__banner__info__paragraph">
                        We help manage businesses better with our applications, plugins, extensions 
                        and offer productive experiences for teams and customers alike. 
                    </p>
                </div>
                <div class="products__banner__pictures__container">
                    <img class="products__banner__img" src="@/assets/pictures/products__banner.png" alt="products__banner">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue";

export default {
    name: "products__banner",
    components: {
        Header
    }
};
</script>

<style lang="scss" scoped>
.products__banner {
    background: linear-gradient(247.11deg, #E3E7F6 3.56%, rgba(227, 231, 246, 0) 115.17%);

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1396px;
        margin: 0 auto;

        .products__banner__info__container {

            .products__banner__info__title {
                font-size: 48px;
                line-height: 62px;
                margin-bottom: 32px;
                max-width: 525px;
            }
            .products__banner__info__paragraph {
                font-size: 22px;
                line-height: 33px;
                margin-bottom: 40px;
                max-width: 450px;
            }
        }
    }
}
</style>