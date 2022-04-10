<template>
    <div class="life">
        <div class="container">
            <div class="life__container">
                <div class="life__banner__container">
                    <div class="life__banner__info__container">
                        <h1 class="life__banner__info__title">
                            Life@ Mozilor
                        </h1>
                        <p class="life__banner__info__paragraph">
                            The problems we solve every day could be serious, but we’re not! We have a lot of 
                            fun because we love what we do and you’re welcome to be a part of it.
                        </p>
                    </div>
                    <div class="life__banner__pictures__container">
                        <img class="life__banner__img" src="@/assets/pictures/life.png" alt="life">
                    </div>
                </div>
                <div class="life__collage__container">
                    <img class="life__collage__img" src="@/assets/pictures/team.png" alt="team">
                    <img class="life__collage__img" src="@/assets/pictures/corporate.png" alt="corporate">
                    <img class="life__collage__img" src="@/assets/pictures/meeting.png" alt="meeting">
                    <img class="life__collage__img" src="@/assets/pictures/rest.png" alt="rest">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.life {
    background: linear-gradient(270.76deg, #E3E7F6 -55.5%, rgba(227, 231, 246, 0) 145.36%);

    &__container {
        padding-top: 40px;
        padding-bottom: 60px;
        max-width: 1105px;
        margin: 0 auto;

        .life__banner__container {
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding-bottom: 40px;
            .life__banner__info__container {
                max-width: 323px;

                .life__banner__info__title {
                    margin-bottom: 16px;
                    max-width: 149px;
                }
            }
        }

        .life__collage__container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            position: relative;

            .life__collage__img {

                &:nth-of-type(1) {
                    height: 362px;
                }
                &:nth-of-type(2) {
                    height: 414px;
                }
                &:nth-of-type(3) {
                    height: 340px;
                }
                &:nth-of-type(4) {
                    position: relative;
                    height: 275px;
                    top: 65px;
                }
            }
        }
    }
}
</style>