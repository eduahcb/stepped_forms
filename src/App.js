import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'
import { Forms } from './components/forms'

import { ValidationProvider } from './context/ValidationContext'

function App() {
  return (
    <Container maxWidth="lg">
      <Grid
        style={{ marginTop: '3em' }}
        container
        alignContent="center"
        direction="column"
        spacing={0}
      >
        <Grid item xs={5}>
          <Grid container justify="center">
            <Typography variant="h4" component="h2" display="block">
              Formulário de cadastro
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={5}>
          <Grid container justify="center">
            <ValidationProvider>
              <Forms />
            </ValidationProvider>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
