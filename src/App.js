import React from 'react'
import PaginaCadastro from './pages/PaginaCadastro/PaginaCadastro'
// import { createGlobalStyle } from 'styled-components';
import PaginaHome from './pages/PaginaHome/PaginaHome';

// const GlobalStyle = createGlobalStyle`
//   *{  
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: Verdana, Geneva, Tahoma, sans-serif;
//   }
// `


export default class App extends React.Component {
	state = {
		paginaAtual: "home",
	}


	trocarTela = () => {
		switch (this.state.paginaAtual) {
			case "home":
				return <PaginaHome goToPaginaCadastro={this.goToPaginaCadastro} onToPaginaCadastro={this.goToPaginaServicos} />
			case "cadastro":
				return <PaginaCadastro />
			// case "servicos":
			// 	return <PaginaServicos />
			default:
				return <PaginaCadastro />
		}

	}

	// gotoVerdetalhes =(id) => {
	// 	this.setState({ paginaAtual: "verDetalhes" })
	// }

	goToPaginaCadastro = () => {
		this.setState({ paginaAtual: "cadastro" })
	}
	goToPaginaHome = () => {
		this.setState({ paginaAtual: "home" })
	}
	goToPaginaServicos = () => {
		this.setState({ paginaAtual: "servicos" })
	}





	render() {


		return (
			<div>
				{this.trocarTela()}
			</div>
		)
	}

} 