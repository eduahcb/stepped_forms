import React, { useState, useEffect } from 'react'
import AddressData from './AddressData'

import PersonalData from './PersonalData'
import Thanks from './Thanks'
import UserData from './UserData'

const Forms = () => {
  const [steps, setSteps] = useState(0)
  const [data, setData] = useState({})

  useEffect(() => {
    if (steps === Object.keys(forms).length - 1) {
      console.log(data)
    }
  })

  const nextStep = () => {
    setSteps(steps + 1)
  }

  const whenClickNextStep = (info) => {
    setData({ ...data, ...info })
  }

  const forms = {
    0: <UserData whenClick={whenClickNextStep} next={nextStep} />,
    1: <PersonalData whenClick={whenClickNextStep} next={nextStep} />,
    2: <AddressData whenClick={whenClickNextStep} next={nextStep} />,
    3: <Thanks />,
  }

  return <section style={{ marginTop: '3em' }}>{forms[steps]}</section>
}

export default Forms
