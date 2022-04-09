<template>
    <div class="header">
        <div class="container">
            <div class="header__container">
                <div class="logo__container">
                    <router-link class="menu-item" to="/">
                        <img class="brands__logo" src="@/assets/pictures/mozilor.png" alt="mozilor-logo">
                    </router-link>
                </div>
                <div class="menu__container">
                    <router-link class="menu-item" to="/products" exact>Products</router-link>
                    <router-link class="menu-item" to="/about-us">About us</router-link>
                    <router-link class="menu-item" to="/">Contact</router-link>
                    <div class="header__button btn main__btn__style">
                        We’re hiring 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    margin-bottom: 100px;
    &__container {
        align-items: center;
        padding-top: 31.5px;
        display: flex;
        justify-content: space-between;
        max-width: 1600px;
        margin: 0 auto;

        .menu__container {
            align-items: center;
            display: flex;
            .menu-item {
                font-size: 18px;
                line-height: 24px;
                color: #646A89;
                margin-right: 60px;

                &:last-of-type {
                    margin-right: 30px;
                }
            }

            .header__button {
                width: 154px;
                height: 52px;
                padding: 14px 0;
                text-align: center;
            }
        }
        
        
    }
}
</style>