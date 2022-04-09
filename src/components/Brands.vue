<template>
    <div class="brands">
        <div class="container">
            <div class="brands__container">
                <h1 class="brands__title">
                    Over <span>1.3 million</span> users and global brands trust us 
                </h1>
                <div class="brands__logo__container">
                    <img class="brands__logo" src="@/assets/pictures/dekoria.png" alt="dekoria-logo">
                    <img class="brands__logo" src="@/assets/pictures/decathlon.png" alt="decathlon-logo">
                    <img class="brands__logo" src="@/assets/pictures/dominos.png" alt="dominos-logo">
                    <img class="brands__logo" src="@/assets/pictures/heineken.png" alt="heineken-logo">
                    <img class="brands__logo" src="@/assets/pictures/toyota.png" alt="toyota-logo">
                    <img class="brands__logo" src="@/assets/pictures/renault.png" alt="renault-logo">
                    <img class="brands__logo" src="@/assets/pictures/kfc.png" alt="kfc-logo">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.brands {
    background: #fff;
    padding-top: 90px;
    padding-bottom: 147px;
    
    &__container {

        display: flex;
        flex-direction: column;
        align-items: center;
        .brands__title {
            font-size: 36px;

            span {
                color: #BF0830;;
            }
        }
        .brands__logo__container {
            display: flex;
            margin-top: 80px;
            .brands__logo {
                margin-right: 45px;

                &:last-of-type {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>