import React from 'react';
import {FakeButton} from './styles';
import {DivInput} from './styles';
import { headers } from '../../constants/headers';
import Axios from 'axios';
import { BASE_URL } from '../../constants/url';

export default class CardJob extends React.Component {
  
  adicionarJobsCarrinho  = async() => {
    try {
        const body = {
          "message": "Job updated",
          "taken": true
        }
        const url = `${BASE_URL}/jobs/${this.props.id1}`
        const response = await Axios.post(url, body, headers)
            console.log(response)
    } catch (err) {
        console.log(err.response.data)   
    }
  }
   
  
  render() {
     
   

      const Props = this.props
      // console.log(Props)
    return (
      <DivInput>
        <div >
          <p>{Props.title}</p>
          <span>Até {Props.dueDate} por <p>R${Props.price},00</p></span>
          
          <FakeButton onClick={this.adicionarJobsCarrinho} > Adicionar ao carrinho</FakeButton>
          <FakeButton onClick={() => this.props.gotoVerdetalhes(this.props.id1)}> Ver detalhes</FakeButton>
        </div>
      </DivInput>
    )
  }
}
