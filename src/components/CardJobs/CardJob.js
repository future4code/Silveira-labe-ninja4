import React from 'react';
import {FakeButton} from './styles';
import {IconeAddCart} from '../../media/iconeAddCarrinho.png';
import {DivInput} from './styles';
import Axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { headers } from '../../constants/headers';

export default class CardJob extends React.Component {
  state = {
    jobs: [],
    jobID: ""
}
componentDidMount = () => {
    this.getAllJobs()
}
getAllJobs = async () => {
  try {
    const url = `${BASE_URL}/jobs`
    const response = await Axios.get(url, headers)
    this.setState({ jobs: response.data.jobs})
    console.log(response.data)
  } catch (err) {
    // alert('Ih alá! Deu erro... tente novamente.')
    console.log(err.response)
  }
}
  render() {
      // const jobs = this.props.jobs
      console.log(this.state.jobs)
      const cardJob = this.state.jobs.map((trampo) =>{
        return (
          <div key={trampo.id}>
          <p>{trampo.title}</p>
          <span>Até {trampo.dueDate} por <p>R${trampo.price},00</p></span>
          <FakeButton> Adicionar ao carrinho</FakeButton>
      </div>
        )
      })
    return (
      <DivInput>
          {cardJob}
      </DivInput>
    )
  }
}
