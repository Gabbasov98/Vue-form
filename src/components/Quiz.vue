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

              <div
                      class="quiz-step"
                      v-if="currentStep === 1"
              >
                  <div class="quiz-step__text">
                      <div class="quiz-step__title h3">
                          Contact details
                      </div>
                      <div class="quiz-step__desc text18 text14-tablet">
                          Lorem ipsum dolor sit amet consectetur adipisc.
                      </div>
                  </div>

                  <div class="quiz-step__fields">
                      <BaseInput
                              v-model="form.name"
                              label="Name"
                              placeholder="John Carter"
                              required
                      >
                          <img src="../assets/img/user.svg" alt="">
                      </BaseInput>
                      <BaseInput
                              v-model="form.email"
                              label="Email "
                              placeholder="Email address"
                              validation-type="email"
                              required
                      >
                          <img src="../assets/img/email.svg" alt="">
                      </BaseInput>
                      <BaseInput
                              v-model="form.phone"
                              label="Phone Number"
                              placeholder="(123) 456 - 7890"
                              :mask="'(000) 000-0000'"
                              validation-type="phone"
                              required
                      >
                          <img src="../assets/img/phone.svg" alt="">
                      </BaseInput>

                      <BaseInput
                              v-model="form.company"
                              label="Company"
                              placeholder="Company name"
                              required
                      >
                          <img src="../assets/img/company.svg" alt="">
                      </BaseInput>
                  </div>

                  <div v-if="errorMessage" class="quiz-step__message">
                      {{errorMessage}}
                  </div>
              </div>

              <div
                      class="quiz-step"
                      v-if="currentStep === 2"
              >
                  <div class="quiz-step__text">
                      <div class="quiz-step__title h3">
                          Our services
                      </div>
                      <div class="quiz-step__desc text18 text14-tablet">
                          Please select which service you are interested in.
                      </div>
                  </div>
                  <div class="quiz-step__checks">
                      <BaseCheckbox
                              v-for="option in servicesOptions" :key="option.value"
                              v-model="form.services"
                              :value="option.value"
                              :label="option.label"
                              :icon="option.icon"
                      />
                  </div>
              </div>

              <div
                      class="quiz-step"
                      v-if="currentStep === 3"
              >
                  <div class="quiz-step__text">
                      <div class="quiz-step__title h3">
                          What’s your project budget?
                      </div>
                      <div class="quiz-step__desc text18 text14-tablet">
                          Please select the project budget range you have in mind.
                      </div>
                  </div>
                  <div class="quiz-step__checks">
                      <BaseRadio
                              v-for="option in budgetOptions" :key="option.value"
                              v-model="form.budget"
                              :value="option.value"
                              :label="option.label"
                              name="Budget"
                      />
                  </div>
              </div>

              <div
                      class="quiz-step"
                      v-if="currentStep === 4"
              >
                  <div class="quiz-finish">
                      <img src="../assets/img/quiz-finish.svg" alt="" class="quiz-finish__icon">
                      <div class="quiz-step__text">
                          <div class="quiz-step__title h3">
                              Submit your quote request
                          </div>
                          <div class="quiz-step__desc text18 text14-tablet">
                              Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a project quote in 24 - 48 hours.
                          </div>
                      </div>

                      <div class="quiz-finish__nav">
                          <BaseButton
                                  variant="primary"
                                  @click="sendData"
                          >
                              <span>Submit</span>
                          </BaseButton>
                      </div>
                  </div>

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
import BaseInput from '#/components/ui/BaseInput.vue'
import BaseCheckbox from '#/components/ui/BaseCheckbox.vue'
import BaseRadio from '#/components/ui/BaseRadio.vue'

const form = reactive({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: ['Development'],
    budget: '$5.000 - $10.000',
})
const currentStep = ref(1);
const errorMessage = ref('');

const servicesOptions = [
    { label: 'Development', value: 'Development' , icon: 'Development.svg'},
    { label: 'Web Design', value: 'Web Design' , icon: 'WebDesign.svg'},
    { label: 'Marketing', value: 'Marketing' , icon: 'Marketing.svg'},
    { label: 'Other', value: 'Other' , icon: 'Other.svg'},
]

const budgetOptions = [
    { label: '$5.000 - $10.000', value: '$5.000 - $10.000' },
    { label: '$10.000 - $20.000', value: '$10.000 - $20.000' },
    { label: '$20.000 - $50.000', value: '$20.000 - $50.000' },
    { label: '$50.000 +', value: '$50.000 +' },
]

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
    console.log(form.name)
    if(
        currentStep === 1 &&
        form.name === '' ||
        form.email === '' ||
        form.phone === '' ||
        form.company === ''
    )
    {
        errorMessage.value = 'All fields are required'
        return
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
    &__checks,
    &__fields{
        display: grid;
        grid-template-columns: repeat(2,calc(50% - .875em));
        margin-top: 2.45em;
    }
    &__fields{
        gap: 2.75em 1.75em;
    }
    &__checks{
        gap: 1.35em 1.75em;
    }
    &__message{
        margin-top: 2em;
        line-height: 150%;
        color: red;
    }
}

.quiz-finish{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 31em;
    max-width: 100%;
    margin: 0 auto;
    &__icon{
        width: 9.875em;
        margin-bottom: 1.15em;
    }
    &__nav{
        margin-top: .75em;
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
        &__checks,
        &__fields{
            grid-template-columns: 100%;
            gap: 1.25em;
            margin-top: 1.25em;
        }
        &__message{
            margin-top: 1em;
        }
    }

    .quiz-finish{
        &__icon{
            width: 5em;
            margin-bottom: 1em;
        }
    }
}

</style>
