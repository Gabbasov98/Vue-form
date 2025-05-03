<template>
    <div class="quiz-step">
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
                    v-model="selectedOption"
                    :value="option.value"
                    :label="option.label"
                    name="Budget"
            />
        </div>
    </div>
</template>

<script setup>
    import {defineEmits, onMounted, ref, watch} from "vue";
    import BaseRadio from '#/components/ui/BaseRadio.vue'

    const emit = defineEmits(['fieldsChange'])

    const props = defineProps({
        form: {
            type: [Object],
        },
    })

    const selectedOption = ref('');

    const budgetOptions = [
        { label: '$5.000 - $10.000', value: '$5.000 - $10.000' },
        { label: '$10.000 - $20.000', value: '$10.000 - $20.000' },
        { label: '$20.000 - $50.000', value: '$20.000 - $50.000' },
        { label: '$50.000 +', value: '$50.000 +' },
    ]

    onMounted(() => {
        selectedOption.value = props.form.budget
    })

    watch(selectedOption, ( newValue, oldValue ) => {
        emit('fieldsChange', {budget: newValue})
    })
</script>

<style scoped lang="scss">
    .quiz-step{
        &__checks{
            display: grid;
            grid-template-columns: repeat(2,calc(50% - .875em));
            margin-top: 2.45em;
            gap: 1.35em 1.75em;
        }
    }

    @media screen and (max-width: 576px) {
        .quiz-step {
            &__checks {
                grid-template-columns: 100%;
                gap: 1.25em;
                margin-top: 1.25em;
            }
        }
    }
</style>
