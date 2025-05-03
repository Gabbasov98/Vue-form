import { ref } from 'vue'

export function usePhoneInputValidation(initialValue  = '') {
    const value = ref(initialValue)

    function isCorrect() {
        if(value.value.trim() === ''){
            return 'Field is Required'
        }

        const digitsOnly = value.value.replace(/\D/g, '')

        if (digitsOnly.length < 10) {
            return `Enter at least ${10} digits`
        }

        return ''
    }

    return {
        value,
        isCorrect
    }
}
