<template>
    <div class="about__collage">
        <div class="container">
            <div class="about__collage__container">
                <div class="collage__box">
                    <h1 class="collage__box__title">
                        2017    
                    </h1>
                    <p class="collage__box__paragraph">
                        Founded in
                    </p>
                </div>
                <div class="collage__box">
                    <h1 class="collage__box__title">
                        44+
                    </h1>
                    <p class="collage__box__paragraph">
                        Employees
                    </p>
                </div>
                <div class="collage__box">
                    <h1 class="collage__box__title">
                        1.3M+
                    </h1>
                    <p class="collage__box__paragraph">
                        Active users
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.about__collage {

    &__container {
        display: flex;
        justify-content: center;
        padding-bottom: 82px;
        .collage__box {
            background: #FFFFFF;
            box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.05);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 53px;
            margin-right: 32px;
            height: 318px;
            width: 316px;

            &:nth-of-type(1) {
                background: url(../assets/pictures/rocket.png);
                background-repeat: no-repeat;
                background-position: bottom;
            }

            &:nth-of-type(2) {
                background: url(../assets/pictures/group.png);
                background-repeat: no-repeat;
                background-position: bottom;
            }

            &:nth-of-type(3) {
                background: url(../assets/pictures/relations.png);
                background-repeat: no-repeat;
                background-position: bottom;
                margin-right: 0;
            }

            .collage__box__title {
                font-size: 56px;
                line-height: 62px;
            }

            .collage__box__paragraph {
                font-size: 22px;
                line-height: 33px;
            }
        }
    }
}
</style>