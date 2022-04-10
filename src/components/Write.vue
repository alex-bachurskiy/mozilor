<template>
    <div class="write">
        <div class="container">
            <div class="write__container">
                <div class="write__title__container">
                    <h1 class="write__title">
                        Didn’t find what you’re looking for?
                    </h1>
                    <p class="write__title__string">
                        We are always on the lookout for great people. Tell us why you want to join us.
                    </p>
                </div>
                <div class="write__button btn main__btn__style">
                    Write to us
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.write {
    background: linear-gradient(342.12deg, #E3E7F6 -6.53%, rgba(227, 231, 246, 0) 87.81%);

    &__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 112px 0;

        .write__title__container {
            margin-bottom: 40px; 
            text-align: center;

            .write__title {
                margin-bottom: 16px;
            }
        }

        .write__button {
            text-align: center;
            max-width: 148px;
        }
    }
}
</style>