<template>
    <div class="career__information">
        <div class="container">
            <div class="career__information__container">
                <div class="career__information__title__container">
                    <h1 class="career__information__title">
                        We offer nothing but the best
                    </h1>
                    <p class="career__information__title__string">
                        We put our people first and have built a career that brings the best out of everyone.
                    </p>
                </div>
                <div class="career__info__container">
                    <div class="career__info">
                        <div class="career__info__title__container">
                            <img class="career__info__img" src="@/assets/pictures/flexiblility.png" alt="flexiblility">
                            <h1 class="career__info__title">
                                Flexiblility
                            </h1>
                        </div>
                        <p class="career__info__paragraph">
                            Be it in-office, WFH or a mix of both, do your best work 
                            from wherever you want, because we have a hybrid and flexible work culture.
                        </p>
                    </div>
                    <div class="career__info">
                        <div class="career__info__title__container">
                            <img class="career__info__img" src="@/assets/pictures/learning.png" alt="learning">
                            <h1 class="career__info__title">
                                Learning
                            </h1>
                        </div>
                        <p class="career__info__paragraph">
                            We offer plenty of learning opportunities such as professional 
                            courses, guided learning and workshops to pick up new skills.
                        </p>
                    </div>
                    <div class="career__info">
                        <div class="career__info__title__container">
                            <img class="career__info__img" src="@/assets/pictures/wellbeing.png" alt="wellbeing">
                            <h1 class="career__info__title">
                                Wellbeing
                            </h1>
                        </div>
                        <p class="career__info__paragraph">
                            We’ve got your wellbeing covered with medical insurance 
                            for employees and dependents, employee loans and paid parental leaves.
                        </p>
                    </div>
                    <div class="career__info">
                        <div class="career__info__title__container">
                            <img class="career__info__img" src="@/assets/pictures/perks.png" alt="perks">
                            <h1 class="career__info__title">
                                Perks
                            </h1>
                        </div>
                        <p class="career__info__paragraph">
                            We provide great tech like Macbooks and work essentials. 
                            To top it, we have yearly company-wide retreats at the best locations!
                        </p>
                    </div>
                    <div class="career__info">
                        <div class="career__info__title__container">
                            <img class="career__info__img" src="@/assets/pictures/growth.png" alt="growth">
                            <h1 class="career__info__title">
                                Growth
                            </h1>
                        </div>
                        <p class="career__info__paragraph">
                            Get the freedom to run your ideas, take up new job roles 
                            and collaborate across teams and chart your career.
                        </p>
                    </div>
                    <div class="career__info">
                        <div class="career__info__title__container">
                            <img class="career__info__img" src="@/assets/pictures/network.png" alt="network">
                            <h1 class="career__info__title">
                                Network
                            </h1>
                        </div>
                        <p class="career__info__paragraph">
                            Build your network and rub shoulders with top teams 
                            from the biggest brands and startups in the world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.career__information {

    &__container {
        padding-top: 120px;
        padding-bottom: 40px;

        .career__information__title__container {
            text-align: center;
            margin-bottom: 109px;

            .career__information__title {
                line-height: 62px;
                margin-bottom: 16px;
            }
        }

        .career__info__container {
            display: flex;
            max-width: 1105px;
            flex-wrap: wrap;
            margin: 0 auto;

            .career__info {
                background: #FFFFFF;
                box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.05);
                border-radius: 8px;
                padding: 40px 33px;
                max-width: 345px;
                margin-right: 35px;
                margin-bottom: 36px;

                &:nth-of-type(4),
                &:nth-of-type(5),
                &:nth-of-type(6) {
                    margin-bottom: 0;
                }

                &:nth-of-type(3),
                &:nth-of-type(6) {
                    margin-right: 0;
                }

                .career__info__title__container {
                    display: flex;
                    align-items: center;
                    margin-bottom: 38.5px;
                    .career__info__title {
                        font-size: 28px;
                        line-height: 31px;
                        color: #3A3A3C;
                        margin-left: 12px;
                    }
                }
            }
        }
    }
}
</style>