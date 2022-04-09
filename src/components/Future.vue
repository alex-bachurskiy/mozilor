<template>
    <div class="future">
        <div class="container">
            <div class="future__container">
                <div class="future__title__container">
                    <h1 class="future__title">
                        Want to know how we build products for the future?
                    </h1>
                    <p class="future__string">
                        Then be a part of our remarkable journey and let’s learn together!
                    </p>
                </div>
                <div class="main__banner__btn__container">
                    <router-link class="about btn main__btn__style" to="/">About us</router-link>
                    <router-link class="join btn transperent__btn__style" to="/">Join the team</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.future {

    &__container {
        padding-top: 136px;
        padding-bottom: 137px;

        .future__title__container {
            max-width: 878px;
            margin: 0 auto 40px auto;
            text-align: center;
            .future__title {
                line-height: 62px;
                margin-bottom: 42px;
            }
        }

        .main__banner__btn__container {
            display: flex;
            justify-content: center;
            .about,
            .join {
                height: 52px;
                padding: 14px 32px;
            }
            .about {
                max-width: 145px;
                margin-right: 20px;
            }

            .join {
                max-width: 185px;
            }
        }
    }
}
</style>