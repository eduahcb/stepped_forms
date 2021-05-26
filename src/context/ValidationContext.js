import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { passwordValidation, cpfValidation } from '../validators'

const ValidationContext = React.createContext()
ValidationContext.displayName = 'ValidationContext'

const useValidationContext = () => {
  const context = useContext(ValidationContext)

  if (typeof context === 'undefined') {
    throw new Error(
      'useValidationContext must be used within a ValidationProvider'
    )
  }

  return context
}

const ValidationProvider = ({ children }) => {
  const validation = {
    password: passwordValidation,
    cpf: cpfValidation,
  }

  const value = {
    validation,
  }

  return (
    <ValidationContext.Provider value={value}>
      {children}
    </ValidationContext.Provider>
  )
}

ValidationProvider.propTypes = {
  children: PropTypes.any,
}

export { ValidationProvider, ValidationContext, useValidationContext }
