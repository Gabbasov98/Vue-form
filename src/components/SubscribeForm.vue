<template>
<form class="subscribe-form">
    <BaseInput
            v-model="subscribedUserEmail"
            label=""
            placeholder="Enter your email"
            validation-type="email"
    />
    <div class="subscribe-form__nav">
    <BaseButton variant="primary">
        <span>Subscribe</span>
    </BaseButton>
    </div>
</form>
</template>

<script setup>
import { ref } from 'vue'

import BaseInput from '#/components/ui/BaseInput.vue'
import BaseButton from '#/components/ui/BaseButton.vue'

const subscribedUserEmail = ref('')

</script>

<style scoped lang="scss">
.subscribe-form {
    position: relative;
  & :deep(.fg){
    input{
      height: 4.33em;
      padding: 0 10.25em 0 1.67em;
    }
  }
  &__nav{
    position: absolute;
    top: .71em;
    right: 1em;
    & :deep(.m-btn){
      height: 3.4375em;
      padding: 0 2em;
    }
  }
}

@media screen and (max-width: 576px){
    .subscribe-form{
        &__nav{
            position: static;
            width: 100%;
            margin-top: 1em;
        }
        & :deep(.fg){
            input{
                padding: 0 1.67em;
                font-size: 1em;
            }
        }
        & :deep(.m-btn){
            width: 100%;
        }
    }
}
</style>
