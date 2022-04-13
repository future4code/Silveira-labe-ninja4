import React, { Component } from 'react'
import { Container, Span } from './Grid-style'


export default class Grid extends Component {
  render() {
    return (
      <>
          <Container>
            {/* Colocar o componente Card Aqui. A tag span é só um exemplo para poder visualizar o grid. Deve ser apagado e substituído pelo Card. */}

            <Span>Teste</Span>
            <Span>Teste</Span>
            <Span>Teste</Span>
            <Span>Teste</Span>
            <Span>Teste</Span>
            <Span>Teste</Span>
          </Container>
      </>
    )
  }
}
