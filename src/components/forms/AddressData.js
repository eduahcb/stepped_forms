import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button, FormControl, TextField } from '@material-ui/core'

const AddressData = ({ next, whenClick }) => {
  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [district, setDistrict] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const handleRegister = () => {
    whenClick({ cep, street, district, city, state })
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
          label="CEP"
          name="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="Rua"
          name="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="Bairro"
          name="district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="cidade"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          margin="normal"
          fullWidth
          id="standard-basic"
          autoComplete="off"
          label="estado"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <Button
          style={{ marginTop: '2em' }}
          variant="contained"
          color="primary"
          onClick={handleRegister}
        >
          Cadastrar
        </Button>
      </FormControl>
    </>
  )
}

AddressData.propTypes = {
  next: PropTypes.func,
  whenClick: PropTypes.func,
}

export default AddressData
