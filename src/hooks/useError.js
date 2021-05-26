import { useState } from 'react'

const useError = (validation) => {
  const initialState = createInitialState(validation)
  const [errors, setErrors] = useState(initialState)

  const isAValidField = (event) => {
    const { name, value } = event.target
    const result = validation[name](value)
    setErrors(result)
  }

  const canImoveToNextStep = () => {
    for (const field in errors) {
      if (!errors[field].isValid === true) {
        return false
      }
    }
    return true
  }

  return {
    errors,
    isAValidField,
    canImoveToNextStep,
  }
}

const createInitialState = (validation) => {
  const initialState = {}
  for (const field in validation) {
    initialState[field] = { isValid: true, message: '' }
  }
  return initialState
}

export default useError
