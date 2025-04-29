<template>
    <button
            :class="['m-btn', `m-btn-${variant}`]"
            :disabled="disabled"
            @click="handleClick"
    >
        <slot />
    </button>
</template>

<script setup>
    defineOptions({
        name: 'BaseButton'
    })

    import { defineEmits } from 'vue'

    const emit = defineEmits(['click'])

    const props = defineProps({
        variant: {
            type: String,
            default: 'primary', // варианты: primary, secondary, danger и т.д.
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    })

    function handleClick(event) {
        if (!props.disabled) {
            emit('click', event)
        }
    }
</script>

<style lang="scss" scoped>
.m-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all ease-out .225s;
    padding: 0 2.5em;
    height: 3.75em;
    border-radius: 3.5em;
    font-weight: 700;
    &:disabled{
        opacity: .7;
        pointer-events: none;
    }
    &:focus {
        box-shadow: none;
    }
    & :slotted(span){
        font-size: 1.125em;
        line-height: 111%;
    }
}

.m-btn-white{
    background-color: $white;
    color: $primary;
    &:hover{
        background-color: darken($white,10%);
        color: $primary;
    }
}

.m-btn-red{
    background-color: #FF2D46;
    color: $white;
    &:hover{
        background-color: darken(#FF2D46,10%);
        color: $white;
    }
}

.m-btn-primary-outline{
    border: 1px solid $primary;
    color: $primary;
    &:hover{
        background-color: $primary;
        color: $white;
    }
}

.m-btn-primary{
    background-color: $primary;
    color: $white;
    &:hover{
        background-color: darken($primary,10%);
        color: $white;
    }
}

.m-btn-secondary{
    background-color: $secondary;
    color: $primary;
    &:hover{
        background-color: $primary;
        color: $white;
    }
}


@media screen and (max-width: 576px){
    .m-btn{
        padding: 0 1.5em;
    }
}
</style>
