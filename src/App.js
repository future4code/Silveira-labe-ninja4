import React from 'react'
import PaginaCadastro from './pages/PaginaCadastro/PaginaCadastro'
// import { createGlobalStyle } from 'styled-components';
import PaginaHome from './pages/PaginaHome/PaginaHome';
import PaginaServicos from './components/Grid/PaginaServicos'
import VerDetalhes from './pages/Ver Detalhes/VerDetalhes';

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
		servicoClickado: ""
	}


	trocarTela = () => {
		switch (this.state.paginaAtual) {
			case "home":
				return <PaginaHome goToPaginaCadastro={this.goToPaginaCadastro} onToPaginaServicos={this.goToPaginaServicos} />
			case "cadastro":
				return <PaginaCadastro />
			case "servicos":
				return <PaginaServicos gotoVerdetalhes={this.gotoVerdetalhes}/>
				case "verDetalhes":
					return <VerDetalhes jobID={this.state.servicoClickado} goToPaginaServicos={this.goToPaginaServicos}/>
			default:
				return <PaginaCadastro />
		}

	}

	gotoVerdetalhes =(id) => {
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





	render() {
// console.log(this.state.servicoClickado)

		return (
			<div>
				{this.trocarTela()}
{/* 
        <Filtros />
        <Grid /> */}
			</div>
		)
	}

} 