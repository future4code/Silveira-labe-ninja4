import React from 'react';
import {FakeButton} from './styles';
import {IconeAddCart} from '../../media/iconeAddCarrinho.png';
import {DivInput} from './styles';

export default class CardJob extends React.Component {
  render() {
      const jobs = this.props.jobs
    return (
      <DivInput>
          <p>{jobs.tittle}</p>
          <span>Até {jobs.dueDate} por <p>R$ {jobs.price},00</p></span>
          <FakeButton> <img src={IconeAddCart}/>Adicionar ao carrinho</FakeButton>
          {/* <FakeButton onClick={() => this.props.adicionarJobsCarrinho(jobs.id)}> <img src={IconeAddCart}/>Adicionar ao carrinho</FakeButton> */}
      </DivInput>
    )
  }
}
