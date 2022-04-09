<template>
    <div class="products__line">
        <div class="container">
            <div class="products__line__container">
                <div class="products__line__title__container">
                    <h1 class="products__line__title">
                        Our line of products
                    </h1>
                    <p class="products__line__title__string">
                        Here’s what we’re building to help businesses deliver amazing customer experiences.
                    </p>
                </div>
                <div class="products__line__info__container">
                    <div class="products__line__info">
                        <img class="cookie" src="@/assets/pictures/cookie.png" alt="cookie-logo">
                        <p class="products__line__paragraph">
                            Cookie consent solution for privacy compliance.
                        </p>
                        <router-link class="products__line__btn transperent__btn__style btn" to="/products/#cookieYes">
                            Learn more
                        </router-link>
                    </div>
                    <div class="products__line__info">
                        <img class="webtoffee" src="@/assets/pictures/webtoffee.png" alt="webtoffee-logo">
                        <p class="products__line__paragraph">
                            Plugins and extensions for eCommerce needs.
                        </p>
                        <router-link class="products__line__btn transperent__btn__style btn" to="/products/#webtoffee">
                            Learn more
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.products__line {

    &__container {
        
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 106px;
        padding-bottom: 108px;
        .products__line__title__container {
            text-align: center;
            margin-bottom: 97px;
            .products__line__title {
                font-size: 44px;
                line-height: 57px;
                margin-bottom: 16px;
            }
            .products__line__title__string {
                font-size: 16px;
                line-height: 27px;
                color: #484C63;
            }
        }

        .products__line__info__container {
            display: flex;

            .products__line__info {
                background: #FFFFFF;
                box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.08);
                border-radius: 8px;
                padding-top: 63.5px;
                padding-left: 62px;
                width: 538px;
                height: 530px;

                &:nth-of-type(1) {
                    background: url(../assets/pictures/cookie__info.png);
                    background-position: bottom;
                    background-repeat: no-repeat;
                    margin-right: 32px;
                }

                &:nth-of-type(2) {
                    background: url(../assets/pictures/webtoffee__info.png);
                    background-position: bottom;
                    background-repeat: no-repeat;
                }

                .products__line__paragraph {
                    font-size: 24px;
                    line-height: 31px;
                    color: #3A3A3C;
                    margin-top: 52px;
                    margin-bottom: 46px;
                    max-width: 325px;
                }

                .products__line__btn {
                    background: url(../assets/pictures/vector.png);
                    background-position-y: center;
                    background-position-x: 25px;
                    background-repeat: no-repeat;
                    font-size: 14px;
                    line-height: 150%;
                    letter-spacing: 0.005em;
                    padding: 12px 46px;
                    max-width: 143px;
                }
            }
        }
    }
}
</style>