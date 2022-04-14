import React from 'react'
import PaginaCadastro from './pages/PaginaCadastro/PaginaCadastro'
import { theme } from './theme'
import { ThemeProvider } from '@material-ui/styles';
import { createGlobalStyle } from 'styled-components';
import PaginaHome from './pages/PaginaHome/PaginaHome';
import PaginaServicos from './components/Servicos/PaginaServicos'
import VerDetalhes from './pages/Ver Detalhes/VerDetalhes';
import PaginaCarrinho from './pages/PaginaCarrinho/PaginaCarrinho'

const GlobalStyle = createGlobalStyle`
  *{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
	
   }
`


export default class App extends React.Component {
	state = {
		paginaAtual: "home",
		servicoClickado: "",
		servicoNoCarrinho: [],
	}


	trocarTela = () => {
		switch (this.state.paginaAtual) {
			case "home":
				return <PaginaHome goToPaginaCadastro={this.goToPaginaCadastro} goToPaginaServicos={this.goToPaginaServicos} />
			case "cadastro":
				return <PaginaCadastro goToPaginaHome={this.goToPaginaHome} />
			case "servicos":
				return <PaginaServicos adicionarAoCarrinho={this.adicionarAoCarrinho} gotoVerdetalhes={this.gotoVerdetalhes} goToPaginaHome={this.goToPaginaHome} goToPaginaCarrinho={this.goToPaginaCarrinho} />
			case "verDetalhes":
				return <VerDetalhes jobID={this.state.servicoClickado} goToPaginaServicos={this.goToPaginaServicos} />
			case "carrinho":
				return <PaginaCarrinho removerTudoDoCarrinho={this.removerTudoDoCarrinho} removerDoCarrinho={this.removerDoCarrinho} goToPaginaHome={this.goToPaginaHome} listaDeCarrinho={this.state.servicoNoCarrinho} />
			default:
				return <PaginaHome goToPaginaCadastro={this.goToPaginaCadastro} goToPaginaServicos={this.goToPaginaServicos} />
		}

	}

	gotoVerdetalhes = (id) => {
		this.setState({ paginaAtual: "verDetalhes", servicoClickado: id })
	}

	goToPaginaCadastro = () => {
		this.setState({ paginaAtual: "cadastro" })
	}
	goToPaginaHome = () => {
		this.setState({ paginaAtual: "home" })
	}
	goToPaginaServicos = () => {
		this.setState({ paginaAtual: "servicos" })
	}
	goToPaginaCarrinho = () => {
		this.setState({ paginaAtual: "carrinho" })
	}

	adicionarAoCarrinho = (servico) => {
		alert("Serviço adicionado ao carrinho")
		const novoCarrinho = [...this.state.servicoNoCarrinho, servico]
		this.setState({ servicoNoCarrinho: novoCarrinho })

	}


	removerDoCarrinho = (id) => {
		alert("Serviço removido do carrinho")
		const novoCarrinho = this.state.servicoNoCarrinho.filter((item) => {
			return item.id !== id
		})
		this.setState({ servicoNoCarrinho: novoCarrinho })
	}


	removerTudoDoCarrinho = () => {
	this.setState({ servicoNoCarrinho: [] })

}


render() {


	return (

		<ThemeProvider theme={theme}>
			<GlobalStyle />
			{this.trocarTela()}
		</ThemeProvider>
	)
}

} 