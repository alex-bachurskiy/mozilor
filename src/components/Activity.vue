<template>
    <div class="activity">
        <div class="container">
            <div class="activity__container">
                <div class="activity__info__container">
                    <h1 class="activity__info__title">
                        What we do
                    </h1>
                    <p class="activity__info__paragraph">
                       We build meaningful products that help people to simplify work, are scalable and can 
                       stand the test of time. We strive to deliver solutions that can 
                       transform how businesses work so that they can focus on what matters the most.
                    </p>
                    <p class="activity__info__paragraph">
                        At Mozilor, we see each day as a new opportunity to ideate, explore, take risks and learn.
                        And that’s what has helped us grow and be the leaders across industries. 
                    </p>
                </div>
                <div class="activity__pictures__container">
                    <img class="activity__img" src="@/assets/pictures/group__photo.png" alt="team">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.activity {

    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1600px;
        padding-bottom: 82px;
        margin: 0 auto;

        .activity__info__container {
            order: 2;
            max-width: 416px;

            .activity__info__title {
                margin-bottom: 16px;
            }

            .activity__info__paragraph {
                margin-bottom: 20px;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>