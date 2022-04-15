import React from 'react';
import { DivInput } from './styles';
import Axios from 'axios';
import { ButtonContainer, PaymentChip, ChipsContainer } from './styles';
import { BASE_URL } from '../../constants/url';
import { headers } from '../../constants/headers';
import Button from "@material-ui/core/Button"
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

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
    const paymentMethodsComponents = this.state.job.paymentMethods && this.state.job.paymentMethods.map((value) => {
      return <PaymentChip color="primary" key={value} label={value} />
    })

    return (
      <DivInput>

        <h1>{this.state.job.title}</h1>
        <ChipsContainer>
          Aceita: 
          {paymentMethodsComponents}
        </ChipsContainer>
        <span><p>Prazo: {this.state.job.dueDate}</p><p>R${this.state.job.price},00</p></span>
        <p>{this.state.job.description}</p>
        <ButtonContainer>
          <Button
            onClick={() => this.props.adicionarAoCarrinho(this.state.job)}
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartOutlinedIcon />}
          > ADICIONAR AO CARRINHO </Button>
          <Button onClick={this.props.goToPaginaServicos}
            variant="outlined"
            color='primary'
          >VOLTAR</Button>
        </ButtonContainer>
      </DivInput >

    )
  }
}
