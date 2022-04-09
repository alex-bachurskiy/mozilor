<template>
    <div class="culture">
        <div class="container">
            <div class="culture__container">
                <div class="culture__title__container">
                    <h1 class="culture__title">
                        Our culture code 
                    </h1>
                    <p class="culture__title__string">
                        The values that drive Mozilorians every day.
                    </p>
                </div>
                <div class="culture__info__container">
                    <div class="culture__info">
                        <h1 class="culture__info__title">
                            Integrity
                        </h1>
                        <p class="culture__info__paragraph">
                            We value people who live by a 
                            strong moral code and act with uncompromising honesty in everything they do.
                        </p>
                    </div>
                    <div class="culture__info">
                        <h1 class="culture__info__title">
                            Accountability
                        </h1>
                        <p class="culture__info__paragraph">
                            We take ownership of everything we do, including our mistakes. We learn from them so 
                            that we can make better mistakes next time.
                        </p>
                    </div>
                    <div class="culture__info">
                        <h1 class="culture__info__title">
                            Humility
                        </h1>
                        <p class="culture__info__paragraph">
                            We value curiosity to learn from anyone, anywhere and the openness 
                            to acknowledge differences.
                        </p>
                    </div>
                    <div class="culture__info">
                        <h1 class="culture__info__title">
                            Autonomy
                        </h1>
                        <p class="culture__info__paragraph">
                            We insist on individuality and care for the goals we achieve, 
                            not the procedures or ceremony in getting there. 
                        </p>
                    </div>
                    <div class="culture__info">
                        <h1 class="culture__info__title">
                            Conscientiousness
                        </h1>
                        <p class="culture__info__paragraph">
                            We seek to be principled and reliable so that we can 
                            always provide value for everyone around us.
                        </p>
                    </div>
                    <div class="culture__info">
                        <h1 class="culture__info__title">
                            Contribution
                        </h1>
                        <p class="culture__info__paragraph">
                            We actively look for opportunities to give back to our team and the world around us.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Team/>
    </div>
</template>

<script>
import Team from "../components/Team.vue";

export default {
    name: "home",
    components: {
        Team
    }
};
</script>


<style lang="scss" scoped>
.culture {
    background: linear-gradient(268.52deg, #E3E7F6 -52.27%, rgba(227, 231, 246, 0) 138.23%);

    &__container {
        padding-top: 65px;

        .culture__title__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            .culture__title {
                line-height: 62px;
                margin-bottom: 16px;
            }
        }

        .culture__info__container {
            display: flex;
            max-width: 1110px;
            flex-wrap: wrap;
            margin: 0 auto;
            padding-top: 97px;
            padding-bottom: 97px;

            .culture__info {
                background: #FFFFFF;
                box-shadow: 0px 0px 8px rgba(22, 23, 72, 0.07), 0px 25px 35px rgba(22, 23, 72, 0.05);
                border-radius: 8px;
                margin-right: 36px;
                margin-bottom: 37px;
                padding: 40px 40px 95px;
                max-width: 345px;

                &:nth-of-type(2),
                &:nth-of-type(4) {
                    height: 251px;
                }

                &:nth-of-type(4),
                &:nth-of-type(5),
                &:nth-of-type(6) {
                    margin-bottom: 0;
                }

                &:nth-of-type(3),
                &:nth-of-type(6) {
                    margin-right: 0;
                }

                .culture__info__title {
                    font-size: 28px;
                    line-height: 31px;
                    color: #3A3A3C;
                }
            }
        }
    }
}
</style>