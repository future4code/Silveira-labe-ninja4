import React, { Component } from 'react'
import { Container, Label } from './Filtos-style'
import TextField from '@material-ui/core/TextField';

export default class Filtros extends Component {
  render() {
    return (
      <>
        <Container>

        <Label htmlFor="sort" >Ordenar por:
            <select name='sort' value={this.props.sortingParameter} onChange={this.props.onChangesortingParameter} >
            <option value="title">Título</option>
            <option value="preco-crescente">Preço Crescente</option>
            <option value="preco-decrescente">Preço Decrescente</option>
            <option value="prazo">Prazo</option>
          </select>
        </Label>

          <Label htmlFor="valor-minimo">Valor Mínimo
          {/* <input type="number" name='valor-minimo' value={this.props.minPrice} onChange={this.props.onChangeMinPrince} /> */}
        </Label>
        <TextField id="outlined-basic" label="Valor Mínimo" variant="outlined" size="small" margin="normal"
          type="number" name='valor-minimo' value={this.props.minPrice} onChange={this.props.onChangeMinPrince}
          />
          <Label htmlFor="valor-maximo">Valor Máximo
          <input type="number" name='valor-maximo' value={this.props.maxPrice} onChange={this.props.onChangeMaxPrince} />
        </Label>



        </Container>
      </>
    )
  }
}
