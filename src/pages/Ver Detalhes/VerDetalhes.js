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



  // adicionarJobsCarrinho = (jobID) => { [PROVAVELMENTE VAI TER QUE FICAR NO PAI E PASSAR PRA CÁ POR PROPS]
  //     console.log('Funcionou');
  //     const jobsNoCarrinho = this.state.jobList.find(job => jobID === job.id)

  //       if (jobsNoCarrinho) {
  //         const novoCarrinho = this.state.jobsNoCarrinho.map(job => {
  //           if (jobsID === job.id){
  //             return { ...
  //               job, quantidade : job.quantidade +1 }
  //         }
  //         return job
  //       })
  //       this.setState({jobsNoCarrinho: novoCarrinho})
  //   }  else {
  //     const jobsParaAdd = this.state.jobs.find(produto => produtoID === produto.id)
  //     const novoCarrinho = [...this.state.jobsNoCarrinho, {...jobsParaAdd, quantidade:1}]
  //     this.setState({jobsNoCarrinho:novoCarrinho})}
  //   } 

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
