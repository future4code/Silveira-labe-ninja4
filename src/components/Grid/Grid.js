import React, { Component } from 'react'
import { Container, Span } from './Grid-style'

import CardJobs from '../CardJobs/CardJob'




export default class Grid extends Component {
  render() {
    return (
      <>
          <Container>
            {/* Colocar o componente Card Aqui. A tag span é só um exemplo para poder visualizar o grid. Deve ser apagado e substituído pelo Card. */}

            <CardJobs />
            <CardJobs />
            <CardJobs />
            <CardJobs />
            <CardJobs />
            <CardJobs />
            <CardJobs />
            <CardJobs />
            <CardJobs />
            <CardJobs />
          </Container>
      </>
    )
  }
}
