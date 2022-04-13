import React from 'react'
import { Container } from './Grid-style'
import Axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { headers } from '../../constants/headers'
import CardJob from '../CardJobs/CardJob'
import Filtros from '../Filtros/Filtros'



export default class PaginaServicos extends React.Component {
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
    // console.log(response.data)
  } catch (err) {
    alert('Ih alá! Deu erro... tente novamente.')
    // console.log(err.response)
  }
}
  render() {
    const servicos = this.state.jobs.map((trabalho) => {
      return (
        <CardJob title={trabalho.title} id1={trabalho.id} price={trabalho.price} dueDate={trabalho.dueDate} gotoVerdetalhes={this.props.gotoVerdetalhes}/>
      )
    })
    return (
      <>
          <Filtros />
          <Container>
            {servicos}
          </Container>
      </>
    )
  }
}
