<template>
    <div class="custom-check">
        <input
                type="checkbox"
                :checked="isChecked"
                @change="onChange"
                :disabled="disabled"
        />
        <div class="custom-check__inner">
            <div class="custom-check__icon">
                <img :src="$getImageUrl(icon)" alt="">
            </div>
            <div class="custom-check__label">
                {{label}}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { defineProps, defineEmits, computed } from 'vue'

    defineOptions({
        name: 'BaseCheckbox'
    })

    const props = defineProps({
        modelValue: {
            type: [Boolean, Array],
            required: true
        },
        value: {
            type: [String, Number, Boolean],
            default: true
        },
        disabled: {
            type: Boolean,
            default: false
        },
        label: {
            type: String,
        },
        icon: {
            type: String,
        },
    })

    const emit = defineEmits(['update:modelValue'])

    const isChecked = computed(() => {
        if (Array.isArray(props.modelValue)) {
            return props.modelValue.includes(props.value)
        } else {
            return props.modelValue
        }
    })

    function onChange(event) {
        if (Array.isArray(props.modelValue)) {
            const newValue = [...props.modelValue]
            if (event.target.checked) {
                if (!newValue.includes(props.value)) {
                    newValue.push(props.value)
                }
            } else {
                const index = newValue.indexOf(props.value)
                if (index !== -1) {
                    newValue.splice(index, 1)
                }
            }
            emit('update:modelValue', newValue)
        } else {
            emit('update:modelValue', event.target.checked)
        }
    }
</script>

<style scoped lang="scss">
    .custom-check{
        position: relative;
        input{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            cursor: pointer;
            &:checked~.custom-check__inner{
                border-color: $primary;
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
            padding: 1.5em 1.61em;
        }
        &__icon{
            @include center;
            width: 4.16513em;
            height: 4.16513em;
            flex-shrink: 0;
            border-radius: 50%;
            background-color: rgba($primary,.15);
            margin-right: .75em;
            img{
                width: 2.5em;
            }
        }
        &__label{
            font-size: 1.125em;
            line-height: 111%;
            font-weight: 500;
        }
    }

    @media screen and (max-width: 576px) {
        .custom-check{
            &__inner{
                padding: .5em 1em;
            }
            &__icon{
                font-size: .75em;
            }
        }
    }
</style>
