import React from 'react'
import PaginaCadastro from './pages/PaginaCadastro/PaginaCadastro'
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`

export default class App extends React.Component {
	state = {
		paginaAtual: "cadastro",
	}


	trocarTela = () => {
		switch (this.state.paginaAtual) {
			case "cadastro":
				return <PaginaCadastro />
			default :
				return 	<PaginaCadastro />

		}

	}

	render() {


		return (
			<div>
				<GlobalStyle/>
				{this.trocarTela()}
			</div>
		)
	}

} 