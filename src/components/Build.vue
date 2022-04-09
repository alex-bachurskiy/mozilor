<template>
    <div class="build">
        <div class="container">
            <div class="build__container">
                <div class="build__info__container">
                    <h1 class="build__info__title">
                        Let's build the next big thing!
                    </h1>
                    <p class="build__info__paragraph">
                        Looking to achieve great things? You’ve come to the right place.
                    </p>
                    <div class="build__button btn transperent__btn__style">
                        Join the team
                    </div>
                </div>
                <div class="build__picture__container">
                    <img class="build__picture" src="@/assets/pictures/build.png" alt="build__picture">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.build {
    background: linear-gradient(335.73deg, #E3E7F6 12.46%, rgba(227, 231, 246, 0) 84.19%);

    &__container {

        align-items: center;
        display: flex;
        justify-content: space-between;
        padding-top: 110px;
        padding-bottom: 110px;
        max-width: 1396px;
        margin: 0 auto;

        .build__info__container {
            max-width: 452px;

            .build__info__title {
                margin-bottom: 16px;
            }
            .build__info__paragraph {
                max-width: 435px;
                margin-bottom: 25px;
            }
            .build__button {
                height: 52px;
                width: 167px;
            }
        }
    }
}
</style>