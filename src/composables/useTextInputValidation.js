import { ref } from 'vue'

export function useTextInputValidation(initialValue  = '') {
    const value = ref(initialValue)

    function isCorrect() {
        if(value.value.trim() === ''){
            return 'Field is Required'
        }

        return ''
    }

    return {
        value,
        isCorrect
    }
}
