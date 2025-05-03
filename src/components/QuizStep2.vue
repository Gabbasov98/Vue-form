<template>
    <div class="quiz-step">
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
                    v-model="selectedOptions"
                    :value="option.value"
                    :label="option.label"
                    :icon="option.icon"
            />
        </div>
    </div>
</template>

<script setup>
    import {defineEmits, onMounted, ref, watch} from "vue";
    import BaseCheckbox from '#/components/ui/BaseCheckbox.vue'

    const emit = defineEmits(['fieldsChange'])

    const props = defineProps({
        form: {
            type: [Object],
        },
    })

    const selectedOptions = ref([]);

    const servicesOptions = [
        { label: 'Development', value: 'Development' , icon: 'Development.svg'},
        { label: 'Web Design', value: 'Web Design' , icon: 'WebDesign.svg'},
        { label: 'Marketing', value: 'Marketing' , icon: 'Marketing.svg'},
        { label: 'Other', value: 'Other' , icon: 'Other.svg'},
    ]

    onMounted(() => {
        selectedOptions.value = props.form.services
    })

    watch(selectedOptions, ( newValue, oldValue ) => {
        emit('fieldsChange', {services: newValue})
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
