<template>
    <div class="jobs">
        <div class="container">
            <div class="jobs__container">
                <div class="jobs__title__container">
                    <h1 class="jobs__title">
                        Join the pack
                    </h1>
                    <p class="jobs__title__string">
                        If you’re looking to do the best work of your career, 
                        learn and grow, then you’ll fit right in at Mozilor! 
                    </p>
                </div>
                <div class="list__of__vacancies__container">
                    <div class="vacancy__container">
                        <div class="vacancy__information__container">
                            <p class="vacancy__information__paragraph">
                                Front-end Developer
                            </p>
                            <div class="vacancy__information">
                                <p class="period">
                                    Full time
                                </p>
                                <p class="location">
                                    India
                                </p>
                            </div>
                        </div>
                        <div class="vacancy__button btn transperent__btn__style">
                            View details
                        </div>
                    </div>
                    <div class="vacancy__container">
                        <div class="vacancy__information__container">
                            <p class="vacancy__information__paragraph">
                                PHP Developers (Laravel)
                            </p>
                            <div class="vacancy__information">
                                <p class="period">
                                    Full time
                                </p>
                                <p class="location">
                                    India
                                </p>
                            </div>
                        </div>
                        <div class="vacancy__button btn transperent__btn__style">
                            View details
                        </div>
                    </div>
                    <div class="vacancy__container">
                        <div class="vacancy__information__container">
                            <p class="vacancy__information__paragraph">
                                Junior Software Developer
                            </p>
                            <div class="vacancy__information">
                                <p class="period">
                                    Full time
                                </p>
                                <p class="location">
                                    India
                                </p>
                            </div>
                        </div>
                        <div class="vacancy__button btn transperent__btn__style">
                            View details
                        </div>
                    </div>
                    <div class="vacancy__container">
                        <div class="vacancy__information__container">
                            <p class="vacancy__information__paragraph">
                                WordPress Developer + Designer
                            </p>
                            <div class="vacancy__information">
                                <p class="period">
                                    Full time
                                </p>
                                <p class="location">
                                    India
                                </p>
                            </div>
                        </div>
                        <div class="vacancy__button btn transperent__btn__style">
                            View details
                        </div>
                    </div>
                    <div class="vacancy__container">
                        <div class="vacancy__information__container">
                            <p class="vacancy__information__paragraph">
                                Node.js Developer
                            </p>
                            <div class="vacancy__information">
                                <p class="period">
                                    Full time
                                </p>
                                <p class="location">
                                    India
                                </p>
                            </div>
                        </div>
                        <div class="vacancy__button btn transperent__btn__style">
                            View details
                        </div>
                    </div>
                </div>
                <div class="jobs__button btn main__btn__style">
                    See more
                </div>
            </div>
        </div>
        <Write/>
    </div>
</template>

<script>
import Write from "../components/Write.vue";

export default {
    name: "jobs",
    components: {
        Write
    }
};
</script>

<style lang="scss" scoped>
.jobs {

    &__container {
        padding-bottom: 44px;

        .jobs__title__container {
            text-align: center;
            margin-bottom: 101px;

            .jobs__title {
                margin-bottom: 16px;
            }
        }

        .list__of__vacancies__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 81px;

            .vacancy__container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 35px 60px;
                background: #FFFFFF;
                box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 17px 35px rgba(22, 23, 72, 0.05);
                border-radius: 8px;
                margin-bottom: 31px;
                height: 141px;
                width: 1110px;

                &:last-of-type {
                    margin-bottom: 0;
                }

                .vacancy__information__container {

                    .vacancy__information__paragraph {
                        font-size: 28px;
                        line-height: 27px;
                        color: #484C63;
                        margin-bottom: 24px;
                    }

                    .vacancy__information {
                        display: flex;
                        font-size: 20px;
                        line-height: 27px;
                        color: #8F90A6;

                        .period {
                            display: flex;
                            align-items: stretch;
                            margin-right: 25px;

                            &::before {
                                content: url(../assets/pictures/time.png);
                                margin-right: 8.5px;
                            }
                        }

                        .location {
                            display: flex;
                            align-items: stretch;

                            &::before {
                                content: url(../assets/pictures/location.png);
                                margin-right: 8.5px;
                            }
                        }
                    }
                }

                .vacancy__button {
                    text-align: center;
                    width: 155px;
                }
            }
        }

        .jobs__button {
            max-width: 133px;
            text-align: center;
            margin: 0 auto;
        }
    }
}
</style>