import React from 'react';
import { FakeButton } from './styles';
import { DivInput } from './styles';
import Button from "@material-ui/core/Button"
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import Icon from '@material-ui/core/Icon';



export default class CardJob extends React.Component {




  render() {


    // console.log(this.props)

    return (
      <DivInput>
        <div >
          <p>{this.props.title}</p>
          <span>Até {this.props.dueDate} <p>por</p> <p>R${this.props.price.toFixed(2)}</p></span>

          <Button
            onClick={() => this.props.adicionarAoCarrinho(this.props.servicos)}
            variant="contained"
            color= "primary"
          >
            <AddShoppingCartOutlinedIcon />
          </Button>
          <Button 
          onClick={() => this.props.gotoVerdetalhes(this.props.id1)}
          >Ver detalhes </Button>
        </div>
      </DivInput>
    )
  }
}
