import React, { Component } from 'react'
import { Container, Label } from './Filtos-style'

export default class Filtros extends Component {
  render() {
    return (
      <>
        <Container>

        <Label htmlFor="filtro-ordenacao" >Ordenar por:
          <select id='filtro-ordenacao'>
            <option value="titule">Título</option>
            <option value="preco-crescente">Preço Crescente</option>
            <option value="preco-decrescente">Preço Decrescente</option>
            <option value="prazo">Prazo</option>
          </select>
        </Label>

        <Label htmlFor="valor-minimo">Valor Mínimo
          <input type="text" id='valor-minimo' />
        </Label>

        <Label htmlFor="valor-maximo">Valor Mínimo
          <input type="text" id='valor-maximo' />
        </Label>



        </Container>
      </>
    )
  }
}
