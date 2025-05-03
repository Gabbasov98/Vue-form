<template>
  <div class="main">
    <div class="container">
      <div class="main__text">
        <div class="main__subtitle">
          Cloneables FOR WEBFLOW
        </div>
        <div class="h1">
          Multi-step Form Webflow Cloneable Template
        </div>
        <div class="text18 text14-tablet neutral600-text">
          Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email below.
        </div>
      </div>

      <div class="main-subscribe">
        <div class="main-subscribe__wrap">
<!--          <SubscribeForm/>-->
        </div>

        <div class="main-subscribe__hint">
          <img src="../assets/img/check.svg" alt="">
          <div class="main-subscribe__hint-text neutral600-text">It's <span class="primary-text">100% free</span> and we will never send more than one email per month</div>
        </div>
      </div>

      <div class="main__bottom">
        <div class="h3">
          Multi Step Form - Step 1
        </div>

        <BaseButton variant="secondary">
          Preview Cloneable
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '#/components/ui/BaseInput.vue'
import BaseButton from '#/components/ui/BaseButton.vue'
import SubscribeForm from '#/components/SubscribeForm.vue'


</script>

<style scoped lang="scss">
.main{
  padding: 2.5em 0 2.75em;
  position: relative;
  overflow: hidden;
  background-image: url(../assets/img/Blob.svg);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 15.75em auto;
  &:before{
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.79);
    backdrop-filter: blur(70.06295776367188px);
    left: -20em;
    bottom: -17em;
    width: 49em;
    height: 49em;
  }
  .container{
    position: relative;
    z-index: 2;
  }
  &__text{
    @include grid100gap(.75em);
    text-align: center;
    width: 42em;
    max-width: 100%;
    margin: 0 auto;
  }
  &__subtitle{
    font-size: 1em;
    line-height: 113%;
    font-weight: 500;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: $primary;
  }
  &__bottom{
    margin-top: 6.25em;
    border-radius: 1.125em;
    background: $white;
    box-shadow: 0px 3px 14px 0px rgba(74, 58, 255, 0.03), 0px -2px 4px 0px rgba(20, 20, 43, 0.02), 0px 12px 24px 0px rgba(20, 20, 43, 0.04);
    padding: 1.69em 2.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & :deep(.m-btn){
      font-weight: 500;
      height: 3.1875em;
      padding: 0 1.75em;
    }
  }
}

.main-subscribe{
  width: 37.5em;
  max-width: 100%;
  margin: 2.5em auto 0;
  &__wrap{
    position: relative;
  }
  &__hint{
    @include center;
    margin-top: 1.5em;
    img{
      width: 1.4375em;
      margin-right: .6em;
    }
    &-text{
      font-size: 1em;
      line-height: 144%;
    }
  }
}

@media screen and (max-width: 992px){
  .main{
    &__subtitle{
      font-size: .875em;
    }
  }
}


@media screen and (max-width: 576px){
  .main{
    &__bottom{
      padding: 1em 1.5em;
      @include grid100gap(1em);
    }
  }

  .main-subscribe{
    &__hint{
      &-text{
        font-size: .875em;
      }
    }
  }
}
</style>
