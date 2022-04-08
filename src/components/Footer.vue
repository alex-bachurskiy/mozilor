<template>
    <div class="footer">
        <div class="container">
            <div class="footer__container">
                <div class="footer__contact__container">
                    <div class="footer__contact">
                        <div class="footer__logo__info">
                            <img class="brands__logo" src="@/assets/pictures/mozilor.png" alt="mozilor-logo">
                            <p class="footer__brand__info">
                                Mozilor builds extensions, plugins and apps to simplify work for businesses. 
                            </p>
                        </div>
                        <div class="footer__menu__container">
                            <div class="footer__menu">
                                <h1 class="footer__menu__title">
                                    Products
                                </h1>
                                <div class="menu-item__container">
                                    <router-link class="menu-item" to="/" exact>CookieYes</router-link>
                                    <router-link class="menu-item" to="/" exact>Webtoffee</router-link>
                                </div>
                            </div>
                            <div class="footer__menu">
                                <h1 class="footer__menu__title">
                                    About
                                </h1>
                                <div class="menu-item__container">
                                    <router-link class="menu-item" to="/" exact>About us</router-link>
                                    <router-link class="menu-item" to="/" exact>Career</router-link>
                                    <router-link class="menu-item" to="/" exact>Contact</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="follow__contaianer">
                            <h1 class="follow__title">
                                Follow us
                            </h1>
                            <div class="follow__logo__container">
                                <img class="follow__logo" src="@/assets/pictures/facebook.png" alt="facebook-logo">
                                <img class="follow__logo" src="@/assets/pictures/twitter.png" alt="twitter-logo">
                                <img class="follow__logo" src="@/assets/pictures/instagram.png" alt="instagram-logo">
                                <img class="follow__logo" src="@/assets/pictures/linkedin.png" alt="linkedin-logo">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__info__container">
                    <div class="footer__info">
                        <p class="copyright__text">
                            © 2022 Mozilor - All right reserved    
                        </p>
                        <p class="teams__text">
                            Terms & Conditions
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.footer {
    background: #0D123C;
    color: #FFFFFF;
    
    .container {
        padding: 0;
    }

    &__container {
        padding-top: 59px;
        padding-bottom: 37px;
        .footer__contact__container {
            border-bottom: 1px solid rgba(197, 203, 226, 0.5);
            padding-right: 163px;
            padding-bottom: 50px;
            padding-left: 170px;

            .footer__contact {
                display: flex;
                justify-content: space-between;
                max-width: 1566px;
                margin: 0 auto;

                .footer__logo__info {

                    .footer__brand__info {
                        font-size: 16px;
                        line-height: 27px;
                        margin-top: 29px;
                        max-width: 287px;
                    }
                }

                .footer__menu__container {
                    display: flex;

                    .footer__menu {

                        margin-right: 100px;

                        &:last-of-type {
                            margin-right: 0;
                        }
                        .footer__menu__title {
                            color: #FFFFFF;
                            font-size: 18px;
                            line-height: 24px;
                            margin-bottom: 30px;
                        }

                        .menu-item__container {
                            display: flex;
                            flex-direction: column;

                            .menu-item {
                                color: #FFFFFF;
                                font-size: 16px;
                                line-height: 21px;
                                margin-bottom: 20px;

                                &:last-of-type {
                                    margin-bottom: 0;
                                }
                            }
                        }
                    }
                }

                .follow__contaianer {

                    .follow__title {
                        font-size: 17px;
                        line-height: 22px;
                        letter-spacing: -0.231818px;
                        color: #FFFFFF;
                    }

                    .follow__logo__container {
                        display: flex;
                        max-width: 103.41px;
                        justify-content: space-between;
                        margin-top: 40px;
                        .follow__logo {
                            cursor: pointer;
                        }
                    }
                }
            }
        }

        .footer__info__container {
            color: #FFFFFF;
            font-size: 16px;
            line-height: 21px;
            padding-top: 29px;
            padding-right: 163px;
            padding-left: 170px;

            .footer__info {
                display: flex;
                justify-content: space-between;
                max-width: 1566px;
                margin: 0 auto;

                .teams__text {
                    text-decoration-line: underline;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>