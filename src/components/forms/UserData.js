import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, FormControl, TextField } from '@material-ui/core'

import useError from '../../hooks/useError'
import { useValidationContext } from '../../context/ValidationContext'

const UserData = ({ whenClick, next }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { validation } = useValidationContext()
  const { canImoveToNextStep, errors, isAValidField } = useError(validation)

  const handleNextStep = (e) => {
    e.preventDefault()
    if (!canImoveToNextStep()) return alert('errou')

    whenClick({ email, password })
    next()
  }

  return (
    <>
      <FormControl>
        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          type="password"
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="senha"
          name="password"
          error={!errors.password.isValid}
          helperText={errors.password.message}
          value={password}
          onBlur={isAValidField}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ marginTop: '2em' }}
          variant="contained"
          color="primary"
          onClick={handleNextStep}
        >
          Próximo
        </Button>
      </FormControl>
    </>
  )
}

UserData.propTypes = {
  next: PropTypes.func,
  whenClick: PropTypes.func,
}

export default UserData
