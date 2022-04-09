<template>
    <div class="hiring">
        <div class="container">
            <div class="hiring__container">
                <div class="hiring__info__container">
                    <h1 class="hiring__info__title">
                        We are hiring!
                    </h1>
                    <p class="hiring__info__paragraph">
                       Help us build tools for the future. We’re looking for curious and smart people to join forces with us and grow together.
                    </p>
                    <div class="hiring__btn__container">
                        <div class="hiring__button btn transperent__btn__style">
                            Join the squad
                        </div>
                    </div>
                </div>
                <div class="hiring__pictures__container">
                    <img class="hiring__img" src="@/assets/pictures/puzzle.png" alt="puzzle">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.hiring {
    background: linear-gradient(268.52deg, #E3E7F6 -52.27%, rgba(227, 231, 246, 0) 138.23%);

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1396px;
        margin: 0 auto;
        padding-top: 150px;
        padding-bottom: 163px;

        .hiring__info__container {
            position: relative;
            max-width: 416px;

            .hiring__info__title {
                margin-bottom: 16px;
            }

            .hiring__info__paragraph {
                margin-bottom: 40px;
            }

            .hiring__btn__container {

                &::before {
                    content: url(../assets/pictures/next.png);
                    position: absolute;
                    display: block;
                    top: 110%;
                    left: 8%;
                }

                .hiring__button {
                    width: 173px;
                    height: 52px;
                }
            }
        }
    }
}
</style>