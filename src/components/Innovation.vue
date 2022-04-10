<template>
    <div class="innovation">
        <div class="container">
            <div class="innovation__container">
                <div class="innovation__title__container">
                    <h1 class="innovation__title">
                        Making waves with innovation
                    </h1>
                    <p class="innovation__string">
                        We are in the news for being market leaders who deliver exceptional products.
                    </p>
                </div>
                <div class="innovation__brands__container">
                    <div class="innovation__logo__container">
                        <div class="innovation__logo">
                            <img class="logo" src="@/assets/pictures/10000startups.png" alt="10000startups-logo">
                        </div>
                        <div class="innovation__logo">
                            <img class="logo" src="@/assets/pictures/wiki.png" alt="wiki-logo">
                        </div>
                        <div class="innovation__logo">
                            <img class="logo" src="@/assets/pictures/smashing.png" alt="smashing-logo">
                        </div>
                        <div class="innovation__logo">
                            <img class="logo" src="@/assets/pictures/css.png" alt="css-logo">
                        </div>
                    </div>
                    <div class="innovation__arrow">
                        <img class="arrows" src="@/assets/pictures/arrows.png" alt="arrows">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.innovation {

    &__container {
        padding-top: 120px;
        padding-bottom: 30px;

        .innovation__title__container {
            text-align: center;
            margin-bottom: 113px;

            .innovation__title {
                margin-bottom: 16px
            }
        }

        .innovation__brands__container {
            display: flex;
            flex-direction: column;
            max-width: 1187px;
            margin: 0 auto;

            .innovation__arrow {
                margin-top: 45px;
                margin-left: 37px;
                cursor: pointer;
            }

            .innovation__logo__container {
                display: flex;
                justify-content: center;
                .innovation__logo {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.05);
                    border-radius: 8px;
                    margin-right: 30px;
                    height: 119px;
                    width: 256px;

                    &:last-of-type {
                        margin-right: 0;
                    }
                }
            }


        }
    }
}
</style>