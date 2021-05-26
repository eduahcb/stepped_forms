const passwordValidation = (password) => {
  if (password.length <= 3) {
    return {
      password: {
        isValid: false,
        message: 'a senha deve ter no mínimo 4 caracteres',
      },
    }
  } else {
    return { password: { isValid: true } }
  }
}

export default passwordValidation
