<template>
  <div class="quiz">
      <div class="container">
          <div class="quiz__top">
              <div class="h2">
                  Get a project quote
              </div>
              <div class="text18 text14-tablet neutral600-text">
                  Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.
              </div>
          </div>

          <div class="quiz-area">
              <div class="progress">
                  <template v-for="n in 4" :key="n">
                      <div
                              class="progress__num"
                              :class="{
                            'progress__num': true,
                            '_current': currentStep === n,
                            '_done': currentStep > n
                          }"
                      >
                          <span>{{n}}</span>
                      </div>
                      <div class="progress__line"></div>
                  </template>
              </div>

              <QuizStep1
                      ref="QuizStep1Ref"
                      :errorMessage="errorMessage"
                      v-if="currentStep === 1"
                      :form="form"
                      @fieldsChange="(data) => stepDataSync(data)"
                      @isSuccess="(value) => setStep1Status(value)"
              />

              <QuizStep2
                      v-if="currentStep === 2"
                      :form="form"
                      @fieldsChange="(data) => stepDataSync(data)"
              />

              <QuizStep3
                      v-if="currentStep === 3"
                      :form="form"
                      @fieldsChange="(data) => stepDataSync(data)"
              />

              <QuizStep4
                      v-if="currentStep === 4"
                      @sendData="sendData"
              />

              <div v-if="errorMessage" class="quiz-step__message">
                  {{errorMessage}}
              </div>
          </div>

          <div class="quiz-area__nav">
              <div
                      class="quiz-area__prev"
                      v-if="currentStep > 1"
              >
                  <BaseButton
                          variant="primary-outline"
                          @click="prevStep"
                  >
                      <span>Previous step</span>
                  </BaseButton>
              </div>
              <div
                      class="quiz-area__next"
                      v-if="currentStep < 4"
              >
                  <BaseButton
                          variant="primary"
                          @click="nextStep"
                  >
                      <span>Next step</span>
                  </BaseButton>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref, reactive  } from 'vue';

import BaseButton from '#/components/ui/BaseButton.vue'
import QuizStep1 from '#/components/QuizStep1.vue'
import QuizStep2 from '#/components/QuizStep2.vue'
import QuizStep3 from '#/components/QuizStep3.vue'
import QuizStep4 from '#/components/QuizStep4.vue'

const QuizStep1Ref = ref(null)
const currentStep = ref(1);
const isStep1Success = ref(false);
const errorMessage = ref('');

const form = reactive({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    budget: '',
})

function stepDataSync(data) {
    Object.assign(form, data)
}

function setStep1Status(value) {
    isStep1Success.value = value
}

function sendData() {
    localStorage.setItem('userForm', JSON.stringify(form))

    currentStep.value = 1
    form.name = ''
    form.email = ''
    form.phone = ''
    form.company = ''
}

function prevStep() {
    currentStep.value--
}

function nextStep() {
    if(currentStep.value === 1) {
        QuizStep1Ref.value.doValidation()

        if(isStep1Success.value){
            currentStep.value++
        }
        return;
    }

    if(currentStep.value === 2) {
        if(form.services.length === 0){
            errorMessage.value = 'Select at least one option'
        } else{
            errorMessage.value = ''
            currentStep.value++
        }
        return;
    }

    if(currentStep.value === 3) {
        if(form.budget === ''){
            errorMessage.value = 'Select option'
        } else{
            errorMessage.value = ''
            currentStep.value++
        }
        return;
    }

    errorMessage.value = ''
    currentStep.value++
}

</script>

<style scoped lang="scss">
.quiz{
    padding: 8em 0;
    background-color: $neutral-200;
    &__top{
        text-align: center;
        margin: 0 auto;
        width: 35em;
        max-width: 100%;
        @include grid100gap(.75em);
    }
}

.quiz-area{
    margin: 2.66em auto 0;
    width: 43.625em;
    max-width: 100%;
    border-radius: 2.125em;
    border: 1px solid $neutral-300;
    background: $white;
    box-shadow: 0px 5px 16px 0px rgba(8, 15, 52, 0.06);
    padding: 2em 2.89em 5em;
    &__nav{
        display: flex;
        justify-content: space-between;
        width: 43.625em;
        max-width: 100%;
        margin: 0 auto;
    }
    &__prev{
        margin-top: 1.98em;
    }
    &__next{
        margin-left: auto;
        margin-top: 1.98em;
    }
}

.progress{
    padding: 0 1.89em 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D9DBE9;
    margin-bottom: 4em;
    &__num{
        width: 2.125em;
        height: 2.125em;
        border-radius: 50%;
        @include center;
        background-color: $neutral-300;
        color: $neutral-600;
        flex-shrink: 0;
        &:nth-last-child(2){
            &+.progress__line{
                display: none;
            }
        }
        &._done,
        &._current{
            color: $white;
            background-color: $primary;
            &+.progress__line:before{
                opacity: 1;
            }
        }
        &._done{
            &+.progress__line:before{
                opacity: 1;
                width: 100%;
            }
        }
    }
    &__line{
        flex-grow: 1;
        margin: 0 1.125em;
        height: 0.375em;
        width: 1em;
        border-radius: 2.5em;
        background-color: $neutral-300;
        position: relative;
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            border-radius: inherit;
            background-color: $primary;
            opacity: 0;
        }
    }
}

.quiz-step{
    &__text{
        @include grid100gap(.5em);
    }
    &__message{
        margin-top: 2em;
        line-height: 150%;
        color: red;
    }
}


@media screen and (max-width: 992px) {
    .quiz {
        padding: 3em 0;
    }
}

@media screen and (max-width: 576px) {
    .quiz-area{
        padding: 1em;
        border-radius: 1em;
    }

    .progress{
        padding: 0 0 1em;
        margin-bottom: 1.5em;
        &__num{
            width: 1.875em;
            height: 1.875em;
        }
        &__line{
            margin: 0 .5em;
        }
    }

    .quiz-step{
        &__message{
            margin-top: 1em;
        }
    }
}

</style>
