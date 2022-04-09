<template>
    <div id="webtoffee">
        <div class="container">
            <div class="webtoffee__container">
                <div class="webtoffee__info__container">
                    <img class="webtoffee__logo" src="@/assets/pictures/webtoffee.png" alt="webtoffee__logo">
                    <p class="webtoffee__info__paragraph">
                        Streamline eCommerce businesses and create amazing customer experiences with our WordPress/WooCommerce 
                        plugins and extensions. Manage your day-to-day operations with extensions for product imports, smart coupons, payment gateways, subscriptions and more.
                    </p>
                    <p class="webtoffee__info__paragraph">
                        WebToffee builds some of the most popular and top-rated plugins in the marketplace and powers over 1.3 million online stores and websites.
                    </p>
                    <div class="webtoffee__button btn transperent__btn__style">
                        Visit Webtoffee
                    </div>
                </div>
                <div class="webtoffee__pictures__container">
                    <img class="webtoffee__img" src="@/assets/pictures/webtoffee__img.png" alt="webtoffee">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#webtoffee {

    .webtoffee__container {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 101px;
        margin-right: auto;
        margin-bottom: 52px;
        margin-left: auto;
        max-width: 1600px;

        .webtoffee__info__container {
            max-width: 419px;
            order: 2;

            .webtoffee__info__paragraph {
                margin-top: 40px;
                margin-bottom: 30px;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }

            .webtoffee__button {
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 0.005em;
                padding: 14px 32px;
                margin-top: 42px;
                max-width: 195px;
            }
        }
    }
}
</style>