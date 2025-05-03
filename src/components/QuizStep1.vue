<template>
    <div
            class="quiz-step"
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
                    v-model="stepFields.name"
                    label="Name"
                    placeholder="John Carter"
                    required
                    :errorMessage="nameErrorMessage"
            >
                <img src="../assets/img/user.svg" alt="">
            </BaseInput>
            <BaseInput
                    v-model="stepFields.email"
                    label="Email "
                    placeholder="Email address"
                    type="email"
                    required
                    :errorMessage="emailErrorMessage"
            >
                <img src="../assets/img/email.svg" alt="">
            </BaseInput>
            <BaseInput
                    v-model="stepFields.phone"
                    label="Phone Number"
                    placeholder="(123) 456 - 7890"
                    type="tel"
                    required
                    :errorMessage="phoneErrorMessage"
            >
                <img src="../assets/img/phone.svg" alt="">
            </BaseInput>

            <BaseInput
                    v-model="stepFields.company"
                    label="Company"
                    placeholder="Company name"
                    required
                    :errorMessage="companyErrorMessage"
            >
                <img src="../assets/img/company.svg" alt="">
            </BaseInput>
        </div>


    </div>
</template>

<script setup>
    import {defineEmits, onMounted, reactive, ref, watch, defineExpose } from 'vue';
    import BaseInput from '#/components/ui/BaseInput.vue'

    import { useTextInputValidation } from '#/composables/useTextInputValidation'
    import { useEmailInputValidation } from '#/composables/useEmailInputValidation'
    import { usePhoneInputValidation } from '#/composables/usePhoneInputValidation'


    const emit = defineEmits(['fieldsChange','isSuccess'])

    const props = defineProps({
        form: {
            type: [Object],
        },
    })

    const stepFields = reactive({
        name: '',
        email: '',
        phone: '',
        company: '',
    })

    const nameErrorMessage = ref('');
    const emailErrorMessage = ref('');
    const phoneErrorMessage = ref('');
    const companyErrorMessage = ref('');

    onMounted(() => {
        stepFields.name = props.form.name
        stepFields.email = props.form.email
        stepFields.phone = props.form.phone
        stepFields.company = props.form.company
    })

    watch(stepFields, ( newValue, oldValue ) => {
        emit('fieldsChange', newValue)
    })



    function nameValidation() {
        const { value, isCorrect } = useTextInputValidation(stepFields.name)
        nameErrorMessage.value = isCorrect()
    }
    function emailValidation() {
        const { value, isCorrect } = useEmailInputValidation(stepFields.email)
        emailErrorMessage.value = isCorrect()
    }
    function phoneValidation() {
        const { value, isCorrect } = usePhoneInputValidation(stepFields.phone)
        phoneErrorMessage.value = isCorrect()
    }
    function companyValidation() {
        const { value, isCorrect } = useTextInputValidation(stepFields.company)
        companyErrorMessage.value = isCorrect()
    }

    function doValidation() {
        console.log('Метод в дочернем компоненте вызван!')

        nameValidation()
        emailValidation()
        phoneValidation()
        companyValidation()

        if(!nameErrorMessage.value && !emailErrorMessage.value && !phoneErrorMessage.value && !companyErrorMessage.value){
            emit('isSuccess', true)
        } else{
            emit('isSuccess', false)
        }
    }


    defineExpose({
        doValidation
    })
</script>


<style scoped lang="scss">
    .quiz-step{
        &__fields{
            display: grid;
            grid-template-columns: repeat(2,calc(50% - .875em));
            margin-top: 2.45em;
            gap: 2.75em 1.75em;
        }
    }

    @media screen and (max-width: 576px) {
        .quiz-step {
            &__fields {
                grid-template-columns: 100%;
                gap: 1.25em;
                margin-top: 1.25em;
            }
        }
    }
</style>
