import React from 'react';
import { DivInput } from './styles';
import Axios from 'axios';
import { IconeAddCart } from '../../media/iconeAddCarrinho.png';
import { IconeVoltar } from '../../media/iconeVoltar.png';
import { FakeButton } from './styles';
import { BASE_URL } from '../../constants/url';
import { headers } from '../../constants/headers';

export default class VerDetalhes extends React.Component {
  state = {
    job: {},
    jobID: ""
  }
  componentDidMount = () => {
    this.getJobById()
  }


  getJobById = async () => {
    try {
      const url = `${BASE_URL}/jobs/${this.props.jobID}`
      const response = await Axios.get(url, headers)
      this.setState({ job: response.data })
      console.log(response)
    } catch (err) {
      //   alert('Ih alá! Deu erro... tente novamente.')
      console.log(err.response.data)
    }
  }




  render() {
    console.log(this.state.job)

    return (
      <div>
        <DivInput>

          <h1>{this.state.job.title}</h1>
          <p>Método de Pagamento: {this.state.job.paymentMethods}</p>
          <span><p>Prazo: {this.state.job.dueDate}</p><p>R${this.state.job.price},00</p></span>
          <p>{this.state.job.description}</p>
          <div>
            <FakeButton onClick={() => this.props.adicionarAoCarrinho(this.props.servicos)}> <p> ADICIONAR AO CARRINHO</p> </FakeButton>
            <FakeButton onClick={this.props.goToPaginaServicos}>VOLTAR</FakeButton>
          </div>
        </DivInput >
      </div >
    )
  }
}
