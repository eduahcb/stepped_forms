import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  FormControl,
  FormControlLabel,
  TextField,
  Switch,
} from '@material-ui/core'

import useError from '../../hooks/useError'
import { useValidationContext } from '../../context/ValidationContext'

const PersonalData = ({ next, whenClick }) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [cpf, setCpf] = useState('')
  const [promotions, setPromotions] = useState(true)
  const [news, setNews] = useState(true)
  const { validation } = useValidationContext()
  const { canImoveToNextStep, errors, isAValidField } = useError(validation)

  const handleNextStep = () => {
    if (!canImoveToNextStep()) return alert('errou')

    whenClick({ name, lastName, cpf, promotions, news })

    next()
  }

  return (
    <>
      <FormControl fullWidth>
        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="Nome"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="Sobrenome"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="CPF"
          name="cpf"
          error={!errors.cpf.isValid}
          helperText={errors.cpf.message}
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          onBlur={isAValidField}
        />

        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              name="promotions"
              value={promotions}
              checked={promotions}
              onChange={(e) => setPromotions(e.target.checked)}
            />
          }
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              name="news"
              value={news}
              checked={news}
              onChange={(e) => setNews(e.target.checked)}
            />
          }
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

PersonalData.propTypes = {
  next: PropTypes.func,
  whenClick: PropTypes.func,
}

export default PersonalData
