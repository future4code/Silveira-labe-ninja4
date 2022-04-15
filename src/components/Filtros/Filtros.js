import React, { Component } from 'react'
import { Container, Label, FiltersContainer, CustomSelect } from './Filtos-style'
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem"

export default class Filtros extends Component {

  render() {
    const orderList = ["Preço Crescente", "Preço Decrescente", "Título", "Prazo"]
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

          <FormControl margin="normal" variant="filled" size="small">
            <InputLabel>Ordenar por:</InputLabel>
            <CustomSelect
              value={this.props.sortingParameter}
              onChange={this.props.onChangesortingParameter}
            >
              {orderList.map((name) => {
                return <MenuItem key={name} value={name}> {name}</MenuItem>
              })}
            </CustomSelect>
          </FormControl>

          <TextField id="outlined-basic" label="Valor Mínimo" variant="filled" size="small" margin="normal"
            type="number" name='valor-minimo' value={this.props.minPrice} onChange={this.props.onChangeMinPrince}
          />

          <TextField id="outlined-basic" label="Valor Máximo" variant="filled" size="small" margin="normal"
            type="number" name='valor-maximo' value={this.props.maxPrice} onChange={this.props.onChangeMaxPrince}
          />



        </Container>
      </>
    )
  }
}
