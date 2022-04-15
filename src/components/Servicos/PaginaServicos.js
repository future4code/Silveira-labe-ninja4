import React from 'react'
import { Container, HeaderDiv, FakeButton, SearchContainer, Main} from './Servicos-style'
import Axios from 'axios'
import { BASE_URL } from '../../constants/url'
import { headers } from '../../constants/headers'
import CardJob from '../CardJobs/CardJob'
import Filtros from '../Filtros/Filtros'
import SvgIcon from '@material-ui/core/SvgIcon';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';



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

    function HomeIcon(props) {
      return (
        <SvgIcon {...props}>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
      );
    }
    return (


      <Main>
        <header>
          <HeaderDiv>
            <FakeButton>
              <HomeIcon onClick={this.props.goToPaginaHome} />
            </FakeButton>

            {/* <label htmlFor="busca">
              <input type="text" id='busca' placeholder='Buscar' value={this.state.query} onChange={this.onChangeQuery} />
            </label> */}
            <SearchContainer>
              <SearchIcon font-size='large' />
              <InputBase
                inputProps={{ style: { color: 'black', width: '500px' } }}
                placeholder="Busca"
                value={this.state.query} 
                onChange={this.onChangeQuery}
              />
            </SearchContainer>
            <FakeButton>
              <AddShoppingCartIcon onClick={this.props.goToPaginaCarrinho} />
            </FakeButton>
          </HeaderDiv>
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
      </Main>
    )
  }
}
