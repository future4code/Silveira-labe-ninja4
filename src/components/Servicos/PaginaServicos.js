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
    this.setState({ jobs: response.data.jobs})
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
    const servicos = this.state.jobs.map((trabalho) => {
      return (
        <CardJob title={trabalho.title} id1={trabalho.id} price={trabalho.price} dueDate={trabalho.dueDate} gotoVerdetalhes={this.props.gotoVerdetalhes}/>
      )
    })
    return (
      <>  
          <header> 
            <button onClick={this.props.goToPaginaHome}  >HOME</button>
            <button onClick={this.props.goToPaginaCarrinho}>CARRINHO</button>
            {this.state.minPrice}
            {this.state.maxPrice}
            {this.state.query}
            {this.state.sortingParameter}

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
