<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__col">
          <div class="footer__logo">
            <img src="../assets/img/logo.svg" alt="">
          </div>
          <div class="text18 text14-tablet neutral600-text">
            Copyright © BRIX Templates | All Rights Reserved
          </div>
        </div>
        <div class="footer__col2">
          <div action="" class="footer-subscribe">
            <div class="footer-subscribe__title">
              Subscribe to receive free Webflow cloneables every month.
            </div>
<!--            <SubscribeForm/>-->
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import SubscribeForm from '#/components/SubscribeForm.vue'
</script>

<style scoped lang="scss">
  .footer{
    padding: 3.5em 0;
    &__inner{
      display: grid;
      grid-template-columns: 31.75em 31.75em;
      justify-content: space-between;
    }
    &__logo{
      width: 16.43em;
      display: block;
      margin-bottom: 1em;
      img{
        width: 100%;
        display: block;
      }
    }
  }

  .footer-subscribe{
    &__title{
      font-size: 1em;
      line-height: 113%;
      font-weight: 500;
      margin-bottom: 1.21em;
    }
  }

  @media screen and (max-width: 992px){
    .footer{
      padding: 2em 0;
      &__inner{
        @include grid100gap(2em);
      }
      &__col2{
        order: -1;
      }
    }
  }

  @media screen and (max-width: 576px){
    .footer{
      &__logo{
        width: 11em;
      }
    }
  }
</style>
