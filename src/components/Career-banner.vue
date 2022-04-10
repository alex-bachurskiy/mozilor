<template>
    <div class="career__banner">
        <Header/>
        <div class="container">
            <div class="career__banner__container">
                <div class="career__banner__info__container">
                    <h1 class="career__banner__info__title">
                        Hey, we're looking for <span>Dreamers</span>
                    </h1>
                    <div class="career__button btn transperent__btn__style">
                        View open roles
                    </div>
                </div>
                <div class="career__banner__pictures__container">
                    <img class="career__banner__img" src="@/assets/pictures/career__banner.png" alt="career__banner">
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
.career__banner {
    background: linear-gradient(247.11deg, #E3E7F6 3.56%, rgba(227, 231, 246, 0) 115.17%);

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1356px;
        margin: 0 auto;

        .career__banner__info__container {

            .career__banner__info__title {
                font-size: 48px;
                line-height: 62px;
                margin-bottom: 40px;
                max-width: 598px;

                span {
                    color: #BF0830;
                }
            }

            .career__button {
                width: 182px;
            }
        }
    }
}
</style>