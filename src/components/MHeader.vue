<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div class="header__logo">
                    <img src="../assets/img/logo.svg" alt="">
                </div>

                <BaseButton variant="primary">
                    <span>Clone now</span>
                </BaseButton>
            </div>
        </div>
    </header>
</template>

<script setup>
import BaseButton from '#/components/ui/BaseButton.vue'

</script>

<style scoped lang="scss">
.header{
    padding: 2em 0;
    &__inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    &__logo{
        width: 19.125em;
        img{
            width: 100%;
            display: block;
        }
    }
}
    

@media screen and (max-width: 992px){
    .header{
        padding: 1em 0;
        &__logo{
            width: 10em;
        }
    }
}


@media screen and (max-width: 576px){

}
</style>
