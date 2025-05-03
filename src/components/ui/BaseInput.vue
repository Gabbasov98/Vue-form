<template>
    <div class="fg">
        <label v-if="label">{{ label }}</label>

        <div class="fg__wrapper">
            <input
                    ref="inputRef"
                    v-bind="$attrs"
                    :type="type"
                    :placeholder="placeholder"
                    :disabled="disabled"
                    @blur="handleBlur"
                    :value="modelValueComputed"
                    @input="handleInput"
            />
            <div class="fg__icon">
                <slot />
            </div>
        </div>

        <small v-if="errorMessage" class="fg__error">{{ errorMessage }}</small>
    </div>
</template>

<script setup>
    import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
    import IMask from 'imask'

    defineOptions({
        name: 'BaseInput'
    })


    const props = defineProps({
        modelValue: {
            type: [String, Number],
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        errorMessage: {
            type: String,
            default: '',
        },
    })

    const emit = defineEmits(['update:modelValue'])

    let maskInstance = null

    const modelValueComputed = computed({
        get: () => props.modelValue || '',
        set: (val) => emit('update:modelValue', val)
    })

    function handleInput(event) {
        modelValueComputed.value = event.target.value
    }

    const inputRef = ref(null)

    onMounted(() => {
        if (props.type === 'tel' && inputRef.value) {
            maskInstance = IMask(inputRef.value, {
                mask: '(000) 000-0000'
            })
            maskInstance.on('accept', () => {
                emit('update:modelValue', maskInstance.value)
            })
        }
    })

    onBeforeUnmount(() => {
        if (maskInstance) {
            maskInstance.destroy()
            maskInstance = null
        }
    })
</script>

<style scoped lang="scss">
    .fg{
        position: relative;
        label{
            font-size: 1.125em;
            line-height: 111%;
            font-weight: 500;
            display: block;
            margin-bottom: 1em;
        }
        input{
            font-size: 1.125em;
            padding: 0 1.11em;
            width: 100%;
            height: 3.67em;
            border-radius: 2.55em;
            border: 1px solid $neutral-300;
            background: $white;
            box-shadow: 0px 2px 6px 0px rgba(19, 18, 66, 0.07);
            &::placeholder{
                color: $neutral-600;
            }
        }
        &__error{
            position: absolute;
            top: 100%;
            left: 0;
            margin-top: .25em;
            font-size: .75em;
            line-height: 120%;
            color: red;
        }
        &__wrapper{
            position: relative;
        }
        &__icon{
            pointer-events: none;
            position: absolute;
            right: 1.5em;
            top: 50%;
            transform: translateY(-50%);
            img{
                max-width: 1.8em;
                max-height: 1.8em;
            }
        }
    }
</style>
