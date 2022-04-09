<template>
    <div id="cookieYes">
        <div class="container">
            <div class="cookieYes__container">
                <div class="cookieYes__info__container">
                    <img class="cookieYes__logo" src="@/assets/pictures/cookie.png" alt="cookieYes__logo">
                    <p class="cookieYes__info__paragraph">
                        Build brand trust and minimize legal risks with the market-leading consent management platform that helps businesses comply with global privacy regulations. Display cookie consent banners, manage consent, generate policy documents and privacy-proof websites with CookieYes.  
                    </p>
                    <p class="cookieYes__banner__info__paragraph">
                        CookieYes is the #1 cookie compliance technology with over 1.2 million user base, powering global brands to startups across US, UK and Europe. 
                    </p>
                    <div class="cookieYes__button btn transperent__btn__style">
                        Visit CookieYes
                    </div>
                </div>
                <div class="cookieYes__banner__pictures__container">
                    <img class="cookieYes__img" src="@/assets/pictures/cookieYes.png" alt="cookieYes">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#cookieYes {

    .cookieYes__container {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-top: 101px;
        margin-right: auto;
        margin-bottom: 31px;
        margin-left: auto;
        max-width: 1600px;

        .cookieYes__info__container {
            max-width: 419px;

            .cookieYes__info__paragraph {
                margin-top: 40px;
                margin-bottom: 30px;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }

            .cookieYes__button {
                font-size: 16px;
                line-height: 150%;
                letter-spacing: 0.005em;
                padding: 14px 32px;
                margin-top: 42px;
                max-width: 195px;
            }
        }
    }
}
</style>