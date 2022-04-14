import React from 'react'
import { Container } from './Servicos-style'
import Axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { headers } from '../../constants/headers'
import CardJob from '../CardJobs/CardJob'
import Filtros from '../Filtros/Filtros'



export default class PaginaServicos extends React.Component {
  state = {
    jobs: [],
    jobID: "",

    query: '',
    minPrice: '',
    maxPrice: '',
    sortingParameter: 'title'
  }
  componentDidMount = () => {
    this.getAllJobs()
  }
  getAllJobs = async () => {
    try {
      const url = `${BASE_URL}/jobs`
      const response = await Axios.get(url, headers)
      this.setState({ jobs: response.data.jobs })
      // console.log(response.data)
    } catch (err) {
      alert('Ih alá! Deu erro... tente novamente.')
      // console.log(err.response)
    }
  }

  onChangeMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value
    })
  }

  onChangeMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value
    })
  }

  onChangeQuery = (ev) => {
    this.setState({
      query: ev.target.value
    })
  }

  onChangesortingParameter = (ev) => {
    this.setState({
      sortingParameter: ev.target.value
    })
  }

  render() {
    
    const servicos = this.state.jobs
      .filter((job) => {
        return job.title.toLowerCase().includes(this.state.query.toLocaleLowerCase())
      })
      .filter((job) => {
        return this.state.minPrice === '' || job.price >= this.state.minPrice
      }).filter((job) => {
        return this.state.maxPrice === '' || job.price <= this.state.maxPrice
      })
      .sort((currentJob, nextJob) => {
        switch (this.state.sortingParameter) {
          case 'title':
            return currentJob.title.localeCompare(nextJob.title)
          case 'prazo':
            return new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime()
          case 'preco-crescente':
            return currentJob.price - nextJob.price
          case 'preco-decrescente':
            return nextJob.price - currentJob.price
          default:
            return currentJob.title.localeCompare(nextJob.title)

        }
      })
      .map((trabalho) => {
        return (
          <CardJob key={trabalho.id}
            servicos={trabalho}
            title={trabalho.title} id1={trabalho.id} price={trabalho.price} dueDate={trabalho.dueDate}
            gotoVerdetalhes={this.props.gotoVerdetalhes} adicionarAoCarrinho={this.props.adicionarAoCarrinho} />
        )
      })
     
     
    return (

      
      <>
        <header>
          <button onClick={this.props.goToPaginaHome}  >HOME</button>
          <button onClick={this.props.goToPaginaCarrinho}>CARRINHO</button>

          <label htmlFor="busca">
            <input type="text" id='busca' placeholder='Buscar' value={this.state.query} onChange={this.onChangeQuery} />
          </label>

        </header>
        <Filtros
          minPrice={this.state.minPrice}
          onChangeMinPrince={this.onChangeMinPrice}

          maxPrice={this.state.maxPrice}
          onChangeMaxPrince={this.onChangeMaxPrice}

          sortingParameter={this.state.sortingParameter}
          onChangesortingParameter={this.onChangesortingParameter}
        />
        <Container>
          {servicos}
        </Container>
      </>
    )
  }
}
