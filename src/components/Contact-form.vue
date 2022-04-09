<template>
    <div class="contact__form">
        <div class="container">
            <div class="contact__form__container">
                <form class="contact_support__form">
                    <div class="name__input">
                        <p class="name">
                            Name*
                        </p>
                        <input class="input" type="text" name="question" required>
                    </div>
                    <div class="email__input">
                        <p class="email">
                            Email*
                        </p>
                        <input class="input" type="email" name="question" required>
                    </div>
                    <div class="subject__input">
                        <p class="subject">
                            Subject
                        </p>
                        <input class="input" type="text" name="question">
                    </div>
                    <div class="message__input">
                        <p class="message">
                            Message*
                        </p>
                        <input class="input" type="text" name="question" required>
                    </div>
                    <input type="submit" value="Send" class="submit btn main__btn__style">
                </form>
                <div class="office__addresses__container">
                    <div class="office__addresses">
                        <h6 class="office__addresses__title">
                            London
                        </h6>
                        <div class="office__addresses__info__container">
                            <p class="office__addresses__info">
                                Mozilor Limited
                            </p>
                            <p class="office__addresses__info">
                                3 Warren Yard, Wolverton Mill
                            </p>
                            <p class="office__addresses__info">
                                Milton Keynes England 
                            </p>
                            <p class="office__addresses__info">
                                UK – MK12 5NW 
                            </p>
                        </div>
                    </div>
                    <div class="office__addresses">
                        <h6 class="office__addresses__title">
                            Kozhikode
                        </h6>
                        <div class="office__addresses__info__container">
                            <p class="office__addresses__info">
                                Mozilor Technologies Pvt Ltd
                            </p>
                            <p class="office__addresses__info">
                                First Floor, Sahya Building, Govt.
                            </p>
                            <p class="office__addresses__info">
                                Cyberpark, Nellikode P.O.
                            </p>
                            <p class="office__addresses__info">
                                Kozhikode, Kerala, India – 673016
                            </p>
                        </div>
                    </div>
                    <div class="office__addresses">
                        <h6 class="office__addresses__title">
                            Bengaluru
                        </h6>
                        <div class="office__addresses__info__container">
                            <p class="office__addresses__info">
                                Mozilor Technologies Pvt Ltd
                            </p>
                            <p class="office__addresses__info">
                                Brigade IRV Centre
                            </p>
                            <p class="office__addresses__info">
                                Nallurahalli Whitefield
                            </p>
                            <p class="office__addresses__info">
                                Bengaluru, Karnataka
                            </p>
                            <p class="office__addresses__info">
                                India – 560066
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.contact__form {

    &__container {
        display: flex;
        padding-top: 102px;
        padding-bottom: 166px;
        max-width: 1566px;
        margin: 0 auto;

        .contact_support__form {
            background: #FFFFFF;
            box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.05);
            border-radius: 8px;
            max-width: 539px;
            padding: 52px 48px;
            height: 710px;
            margin-right: 120px;

            .name__input,
            .email__input,
            .subject__input,
            .message__input {
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 0.005em;
                color: #8F90A6;
                margin-bottom: 30px;
            }

            .message__input {

                .input {
                    height: 148px;
                }
            }

            .input {
                height: 60px;
                width: 443px;
                border: 1px solid #E3E7F6;
                box-sizing: border-box;
                border-radius: 6px;
            }

            .submit {
                border: 0;
                width: 101px;
            }
        }

        .office__addresses__container {
            max-width: 366px;
            height: 688px;
            padding: 28px 0;
            .office__addresses {
                max-width: 273px;
                margin-bottom: 72px;

                &:last-of-type {
                    margin-bottom: 0;
                }

                &:nth-of-type(1) {
                    .office__addresses__title {
                        &::before {
                            content: url(../assets/pictures/uk-flag.png);
                            margin-right: 20px;
                        }
                    }
                }

                &:nth-of-type(2),
                &:nth-of-type(3) {
                    .office__addresses__title {
                        &::before {
                            content: url(../assets/pictures/indian-flag.png);
                            margin-right: 20px;
                        }
                    }
                }

                .office__addresses__title {
                    display: flex;
                    align-items: initial;
                    font-size: 18px;
                    line-height: 150%;
                    letter-spacing: 0.005em;
                    color: #000000;
                    margin-bottom: 25px;
                }

                .office__addresses__info {
                    font-size: 16px;
                    line-height: 150%;
                    letter-spacing: 0.005em;
                    color: #000000;
                }
            }
        }
    }
}
</style>