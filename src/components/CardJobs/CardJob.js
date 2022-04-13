import React from 'react';
import {FakeButton} from './styles';
import {DivInput} from './styles';

export default class CardJob extends React.Component {
  render() {

      const Props = this.props
      // console.log(Props)
    return (
      <DivInput>
        <div >
          <p>{Props.title}</p>
          <span>Até {Props.dueDate} por <p>R${Props.price},00</p></span>
          <FakeButton> Adicionar ao carrinho</FakeButton>
          <FakeButton onClick={() => this.props.gotoVerdetalhes(this.props.id1)}> Ver detalhes</FakeButton>
        </div>
      </DivInput>
    )
  }
}
