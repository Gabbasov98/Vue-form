<template>
    <div class="quiz-step">
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
                        @click="handleClick"
                >
                    <span>Submit</span>
                </BaseButton>
            </div>
        </div>

    </div>
</template>

<script setup>
    import BaseButton from '#/components/ui/BaseButton.vue'
    import {defineEmits} from "vue";

    const emit = defineEmits(['sendData'])

    function handleClick() {
        emit('sendData')
    }
</script>

<style scoped lang="scss">
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

    @media screen and (max-width: 576px) {
        .quiz-finish{
            &__icon{
                width: 5em;
                margin-bottom: 1em;
            }
        }
    }
</style>
