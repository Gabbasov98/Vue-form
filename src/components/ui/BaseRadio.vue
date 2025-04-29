<template>
    <div class="custom-radio">
        <input
                type="radio"
                :checked="modelValue === value"
                @change="onChange"
                :disabled="disabled"
                :name="name"
        />
        <div class="custom-radio__inner">
            <div class="custom-radio__icon"></div>
            <div class="custom-radio__label">
                {{label}}
            </div>
        </div>
    </div>


</template>

<script setup>
    import { defineProps, defineEmits } from 'vue'

    defineOptions({
        name: 'BaseRadio'
    })

    const props = defineProps({
        modelValue: {
            type: [String, Number, Boolean],
            required: true
        },
        value: {
            type: [String, Number, Boolean],
            required: true
        },
        name: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
        },
    })

    const emit = defineEmits(['update:modelValue'])

    function onChange(event) {
        emit('update:modelValue', props.value)
    }
</script>

<style scoped lang="scss">
    .custom-radio{
        position: relative;
        input{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            &:checked~.custom-radio__inner{
                border-color: $primary;
                .custom-radio__icon{
                    border-width: .5em;
                    border-color: $primary;
                }
            }
        }
        &__inner{
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 1em;
            border: 2px solid $white;
            background: $white;
            box-shadow: 0px 2px 11px 0px rgba(69, 65, 164, 0.06), 0px 4px 10px 0px rgba(31, 37, 89, 0.07);
            padding: 1.5em 2em;
            min-height: 7.17em;
        }
        &__icon{
            @include center;
            width: 1.54375em;
            height: 1.54375em;
            flex-shrink: 0;
            border-radius: 50%;
            background-color: $white;
            margin-right: .8em;
            box-shadow: 0px -3px 7px 0px rgba(20, 20, 43, 0.08) inset;
            border: 1px solid $neutral-400;
        }
        &__label{
            font-size: 1.125em;
            line-height: 111%;
            font-weight: 500;
        }
    }

    @media screen and (max-width: 576px) {
        .custom-radio{
            &__inner{
                min-height: 4em;
                padding: .5em 1em;
            }
        }
    }
</style>
