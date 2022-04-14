import React from 'react';
import {FakeButton} from './styles';
import {DivInput} from './styles';



export default class CardJob extends React.Component {
  
  
   
  
  render() {
     
   
    // console.log(this.props)
      
    return (
      <DivInput>
        <div >
          <p>{this.props.title}</p>
          <span>Até {this.props.dueDate} por <p>R${this.props.price},00</p></span>
          
          <FakeButton onClick={() =>this.props.adicionarAoCarrinho(this.props.servicos) } > Adicionar ao carrinho</FakeButton>
          <FakeButton onClick={() => this.props.gotoVerdetalhes(this.props.id1)}> Ver detalhes</FakeButton>
        </div>
      </DivInput>
    )
  }
}
