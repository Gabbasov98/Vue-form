<template>
    <div class="about">
        <div class="container">
            <div class="about__grid">
                <div class="about-card about-card--blue">
                    <div class="about-card__bg">
                        <img src="../assets/img/about-bg.png" alt="">
                    </div>
                    <div class="about-card__inner">
                        <div class="about-card__logo">
                            <img src="../assets/img/logo2.svg" alt="">
                        </div>
                        <div class="about-card__text">
                            <div class="h3">
                                Take a look at our amazing premium Webflow Templates
                            </div>
                            <div class="text18 neutral600-text">
                                Also than having free Webflow cloneables, we create cutting-edge premium Webflow templates too.
                            </div>
                        </div>
                        <div class="about-card__nav">
                            <BaseButton variant="white">
                                <span class="underline-text">Get a quote</span>
                            </BaseButton>
                        </div>
                    </div>
                </div>
                <div class="about-card">
                    <div class="about-card__bg">
                        <img src="../assets/img/about-bg2.png" alt="">
                    </div>
                    <div class="about-card__inner">
                        <div class="about-card__logo">
                            <img src="../assets/img/logo3.svg" alt="">
                        </div>
                        <div class="about-card__text">
                            <div class="h3">
                                Looking to design & develop an amazing
                                Webflow website?
                            </div>
                            <div class="text18 neutral600-text">
                                If you want to get a hand from the amazing team behind BRIX Templates, get in touch with BRIX Agency today.
                            </div>
                        </div>
                        <div class="about-card__nav">
                            <BaseButton variant="red">
                                <span class="underline-text">Get a quote</span>
                            </BaseButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="../assets/img/about-bg3.svg" alt="" class="about__bg">
    </div>

</template>

<script setup>
    import BaseButton from '#/components/ui/BaseButton.vue'

</script>

<style scoped lang="scss">
    .about{
        padding: 10.9em 0 3em;
        position: relative;
        &:before{
            content: '';
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.79);
            backdrop-filter: blur(70.06295776367188px);
            right: -12em;
            bottom: -5em;
            width: 49em;
            height: 49em;
            z-index: 2;
        }
        &__bg{
            position: absolute;
            right: 0;
            bottom: 3.5em;
            width: 24.25em;
        }
        .container{
            position: relative;
            z-index: 2;
        }
        &__grid{
            display: grid;
            grid-template-columns: repeat(2,calc(50% - .9375em));
            gap: 1.875em;
        }
    }

    .about-card{
        border-radius: 2.5rem;
        border: 1px solid $neutral-300;
        background: $white;
        padding: 5em 3.66em 28.23em;
        position: relative;
        &--blue{
            background: linear-gradient(90deg, #4A3AFF 0%, #6D3AFF 100%);
            color: $white;
            .neutral600-text{
                color: rgba($white,.8);
            }
        }
        &__inner{
            position: relative;
            z-index: 2;
        }
        &__bg{
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                display: block;
                object-fit: cover;
                border-radius: 2.5em;
            }
        }
        &__logo{
            height: 2.375em;
            img{
                display: block;
                height: 100%;
            }
        }
        &__text{
            margin-top: 1.58em;
            @include grid100gap(.75em);
        }
        &__nav{
            display: flex;
            margin-top: 1.5em;
        }
    }

    @media screen and (max-width: 992px){
        .about {
            padding: 3em 0 2em;
            &:before,
            &__bg{
                display: none;
            }
            &__grid{
                grid-template-columns: 100%;
            }
        }
    }

    @media screen and (max-width: 576px){
        .about-card {
            padding: 3em 1em 18em;
            border-radius: 1em;
            &__bg{
                height: 80%;
                img{
                    border-radius: 0 0 1em 1em;
                }
            }
        }
    }
</style>
