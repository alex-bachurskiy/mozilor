<template>
    <div class="recommend">
        <div class="container">
            <div class="recommend__container">
                <div class="diagram__container">
                    <img class="diagram__img" src="@/assets/pictures/recommend.png" alt="diagram">
                    <h1 class="diagram__information">
                        95% of employees recommend Mozilor
                    </h1>
                </div>
                <div class="recommend__info__container">
                    <img class="glassdoor__img" src="@/assets/pictures/glassdoor.png" alt="glassdoor">
                    <img class="five__img" src="@/assets/pictures/five.png" alt="4.8">
                    <h6 class="recommend__text">
                        Read our reviews
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.recommend {
    margin-top: 56px;
    margin-bottom: 127px;
    &__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #F7F8FF;
        box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.05);
        border-radius: 8px;
        max-width: 1105px;
        padding: 50px 125px 69px 57px;
        margin: 0 auto;

        .diagram__container {
            display: flex;
            align-items: center;

            .diagram__information {
                font-size: 36px;
                line-height: 48px;
                max-width: 443px;
                margin-left: 27px;
            }
        }

        .recommend__info__container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .recommend__text {
                font-size: 18px;
                line-height: 24px;
                text-decoration-line: underline;
                color: #424B5A;
                cursor: pointer;

                &::after {
                    content: url(../assets/pictures/icon.png);
                    position: relative;
                    top: 4px;
                }
            }
        }
    }
}
</style>