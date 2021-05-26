const cpfValidation = (cpf) => {
  if (cpf.length !== 11) {
    return {
      cpf: {
        isValid: false,
        message: 'o cpf deve ter 11 dígitos',
      },
    }
  } else {
    return {
      cpf: {
        isValid: true,
      },
    }
  }
}

export default cpfValidation
