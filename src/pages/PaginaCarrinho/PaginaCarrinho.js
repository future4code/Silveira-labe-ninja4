import React from "react";
import Typography from '@material-ui/core/Typography'
import Button from "@material-ui/core/Button"


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
        console.log(this.props)


        const listaDeCarrinho = this.props.listaDeCarrinho.map((servico) => {
            return (
                <div 
                    key={servico.id}>
                        {servico.title}
                    R$ {servico.price}
                   
                   <button onClick={() => this.props.removerDoCarrinho(servico.id)}>Deletar</button>
                </div>

            )

        })
        let totalPrice = 0

        this.props.listaDeCarrinho.forEach((item) => {
            totalPrice += item.price
        })


        return (

            <div>
                {listaDeCarrinho}

                <button onClick={this.removerTudoDoCarrinho} >Contratar Serviços</button>
                <div>
                    <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
                    <Button onClick={this.props.removerTudoDoCarrinho} variant="contained" color="primary">Contratar Serviços</Button>

                </div>


            </div>




        )

    }

}    