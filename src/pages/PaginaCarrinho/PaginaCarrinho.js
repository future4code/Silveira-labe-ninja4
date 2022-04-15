import React from "react";
import Header from "../../components/Header";
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from "@material-ui/core/Button"
import { CardCarrinho, ButtonContainer, ButtonHome, HeaderHome, ContainerCarrinho, ButtonDelete } from './styles'
import Grid from '@material-ui/core/Grid';




export default class PaginaCarrinho extends React.Component {
    state = {
        carrinho: [],
        carrinhoFiltrado: []
    }


    valorTotalCarrinho = () => {
        let valorTotal = 0
        for (let servicos of this.props.listaDeCarrinho) {
            valorTotal = servicos.price
        }
        return valorTotal
    }

    render() {
       


        const listaDeCarrinho = this.props.listaDeCarrinho.map((servico) => {
            return (
                <CardCarrinho container  direction="column" justifyContent="space-around"
                    alignItems="center" backgraound-color="#838a86"  key={servico.id}
                >   
                    <strong>{servico.title}</strong>
                    <strong>R$ {servico.price}</strong>

                    <ButtonDelete onClick={() => this.props.removerDoCarrinho(servico.id)}>X</ButtonDelete>

                </CardCarrinho>
            )

        })
        let totalPrice = 0
        this.props.listaDeCarrinho.forEach((item) => {
            totalPrice += item.price
        })


        return (

            <div>
            <HeaderHome>
            <ButtonHome onClick={this.props.goToPaginaHome} > <Header/></ButtonHome>
            </HeaderHome>    
                 <ContainerCarrinho>
                
                {listaDeCarrinho}
                </ContainerCarrinho>  
                <ButtonContainer>
                    <Typography variant="h5">Total: R${totalPrice.toFixed(2)}</Typography>
                    <Button onClick={this.props.removerTudoDoCarrinho}
                     variant="contained" color="primary">Contratar Serviços</Button>

                </ButtonContainer>

            </div>

        );
    }
}    