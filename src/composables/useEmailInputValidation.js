import { ref } from 'vue'

export function useEmailInputValidation(initialValue  = '') {
    const value = ref(initialValue)

    function isCorrect() {
        if(value.value.trim() === ''){
            return 'Field is Required'
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.value)) {
            return 'Email is not correct'
        }

        return ''
    }

    return {
        value,
        isCorrect
    }
}
