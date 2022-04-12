import React from "react";
import { DivInput } from "./styles"



export default class PaginaCadastro extends React.Component {
    state = {
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        dueDate: ""
    }




    OnchangeSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value)
        this.setState=({inputSelect: value})       

    } 


    




    render() {


        return (
            <div>
                <h2>Cadastre o seu serviço</h2>
                <DivInput>
                    <input
                        placeholder="Titulo*"

                    />
                    <input
                        placeholder="Descrição*"

                    />
                    <input
                        placeholder="R$"


                    />
                    <input
                        placeholder="Formas de Pagamento"
                    />
                    <select>
                        <option>Cartão de crédito</option>
                        <option>Cartão de débito</option>
                        <option>Pix</option>
                        <option>PayPal</option>
                        <option>Boleto</option>
                    </select>



                    <input
                        placeholder="Prazo"


                    />
                    <button> Cadastrar</button>

                </DivInput>
            </div>
        )



    }

} 