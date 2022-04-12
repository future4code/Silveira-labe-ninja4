import React from 'react';
import {DivInput} from './styles';
import Axios from 'axios';
import {IconeAddCart} from '../../media/iconeAddCarrinho.png';
import {IconeVoltar} from '../../media/iconeVoltar.png';
import {FakeButton} from './styles';
import { BASE_URL } from '../../constants/url';
import { headers } from '../../constants/headers';

export default class VerDetalhes extends React.Component {
      state = {
          job: [],
          jobID: ""
      }
      componentDidMount = () => {
          this.getJobById()
      }
      getJobById = async () => {
        try {
          const url = `${BASE_URL}/jobs/${this.props.jobID}`
          
           
         
          const response = await Axios.get(url, headers)
          this.setState({ job:response.data})
        } catch (err) {
          alert('Ih alá! Deu erro... tente novamente.')
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

        const job = this.state.job.map((job) => {
            return (
              <div
                key={job.id}
              >
                <div>
                  <h1>{job.tittle}</h1>
                  <p>{job.paymentMethods}</p>
                  <span><p>{job.dueDate}</p><p>R${job.price},00</p></span>
                  <p>{job.description}</p>
                </div>
                <div>
        //         {/* <span onClick={() => this.props.adicionarJobsCarrinho(job.id)}><img src={IconeAddCart}/><p>ADICIONAR AO CARRINHO</p></span> */}
        //             <span onClick={() => this.adicionarJobssCarrinho(job.id)}><img src={IconeVoltar}/><p>ADICIONAR AO CARRINHO</p></span>
        //             <span onClick={this.changePage()}><img /><p>VOLTAR PARA LISTA</p></span>
        //         </div>
        //       </div>
            )
          })
        return (
            <div>
                <DivInput>
                    {job}
                    {/* <h1>Nome do Produto</h1>
                    <p>Método de Pagamento:</p>
                    <span><p>Prazo:</p><p>R$PREÇO,00</p></span>
                    <p>DESCRIÇÃO</p>
                    <div>
                        <FakeButton><img src={IconeAddCart}/><p>ADICIONAR AO CARRINHO</p></FakeButton>
                        <FakeButton><img src={IconeVoltar}/><p>VOLTAR</p></FakeButton>
                    </div> */}
                </DivInput >
            </div >
        )
    }
}
