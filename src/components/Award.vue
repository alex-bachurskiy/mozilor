<template>
    <div class="award">
        <div class="container">
            <div class="award__container">
                <div class="award__info__container">
                    <h1 class="award__info__title">
                        Creators of award-winning products
                    </h1>
                    <p class="award__info__paragraph">
                        Our products are loved by customers and recommended by leading industry experts.
                    </p>
                </div>
                <div class="award__picture__container">
                    <img class="award__picture" src="@/assets/pictures/award__picture.png" alt="award__picture-logo">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.award {
    background: linear-gradient(268.52deg, #E3E7F6 -52.27%, rgba(227, 231, 246, 0) 138.23%);
    &__container {
        align-items: center;
        display: flex;
        justify-content: space-between;
        padding-top: 114px;
        padding-bottom: 78px;
        max-width: 1566px;
        margin: 0 auto;

        .award__info__container {
            max-width: 452px;

            .award__info__title {
                font-size: 44px;
                line-height: 57px;
            }
            .award__info__paragraph {
                font-size: 16px;
                line-height: 27px;
                color: #484C63;
                max-width: 435px;
            }
        }
    }
}
</style>