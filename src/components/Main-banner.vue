<template>
    <div class="main__banner">
        <Header/>
        <div class="container">
            <div class="main__banner__container">
                <div class="main__banner__info__container">
                    <h1 class="main__banner__info__title">
                        We build products to simplify work for businesses
                    </h1>
                    <p class="main__banner__info__paragraph">
                        Our next-gen products empower businesses to implement agility and accelerate growth. 
                    </p>
                    <div class="main__banner__btn__container">
                        <div class="learn__button btn main__btn__style">
                            Learn more
                        </div>
                        <div class="work__button btn transperent__btn__style">
                            Work with us
                        </div>
                    </div>
                </div>
                <div class="main__banner__pictures__container">
                    <img class="brands__logo" src="@/assets/pictures/home__banner.png" alt="home__banner">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header.vue";

export default {
    name: "home",
    components: {
        Header
    }
};
</script>

<style lang="scss" scoped>
.main__banner {
    background: linear-gradient(252.91deg, #E3E7F6 3.68%, rgba(227, 231, 246, 0) 97.82%);

    .container {
        padding-right: 122px;
    }

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1566px;
        margin: 0 auto;
        .main__banner__info__container {

            .main__banner__info__title {
                font-size: 48px;
                line-height: 62px;
                margin-bottom: 32px;
                max-width: 570px;
            }
            .main__banner__info__paragraph {
                font-size: 22px;
                line-height: 33px;
                color: #484C63;
                margin-bottom: 40px;
                max-width: 512px;
            }
            .main__banner__btn__container {
                display: flex;
                .learn__button,
                .work__button {
                    height: 52px;
                    text-align: center;
                    padding: 14px 0;
                }

                .learn__button {
                    margin-right: 16px;
                    width: 147px;
                }
                .work__button {
                    width: 163px;
                }
            }
        }
    }
}
</style>