<template>
    <div class="team">
        <div class="container">
            <div class="team__container">
                <div class="team__info__container">
                    <h1 class="team__info__title">
                        Who we are
                    </h1>
                    <p class="team__info__paragraph">
                       We are a bunch of thinkers and dreamers, who have come together to build products we are proud of. We come from diverse backgrounds, work in different agile teams and come together to deliver the best technology.
                    </p>
                    <p class="team__info__paragraph">
                        In 2017, we started as a one-person endeavour by Anvar TK, our CEO, in an incubator at National Institute of Technology Calicut.  Today, we are a growing team of 40+ members with offices in London, Bangalore and Calicut.   
                    </p>
                </div>
                <div class="team__pictures__container">
                    <img class="team__img" src="@/assets/pictures/group__photo1.png" alt="team">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.team {

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1396px;
        padding-bottom: 82px;
        margin: 0 auto;

        .team__info__container {
            max-width: 420px;

            .team__info__title {
                margin-bottom: 16px;
            }

            .team__info__paragraph {
                margin-bottom: 20px;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>