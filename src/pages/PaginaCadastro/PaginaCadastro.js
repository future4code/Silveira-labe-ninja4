import React from "react";
import { DivInput } from "./styles"
import axios from "axios";
import { headers } from "../../constants/headers";
import { BASE_URL } from "../../constants/url"
import TextField from '@material-ui/core/TextField';

export default class PaginaCadastro extends React.Component {
    state = {
        title: "",
        description: "",
        price: "",
        inputSelect: [],
        dueDate: ""
    }

    cadastrarServicos = async () => {
        try {
            const body = {
                title: this.state.title,
                description: this.state.description,
                price: Number(this.state.price),
                paymentMethods: this.state.inputSelect,
                dueDate: this.state.dueDate
            }
            const response = await axios.post(`${BASE_URL}/jobs`, body, headers)
            console.log(response.data)
        }
        catch (err) {
            console.log(err.response.data)

        }
    }





    onChangetitle = (e) => {
        this.setState({ title: e.target.value })

    }

    onChangedescription = (e) => {
        this.setState({ description: e.target.value })

    }
    onChangeprice = (e) => {
        this.setState({ price: e.target.value })

    }

    onChangepaymentMethods = (e) => {
        this.setState({ paymentMethods: e.target.value })

    }
    onChangedueDate = (e) => {
        this.setState({ dueDate: e.target.value })

    }
    OnchangeSelect = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value)
        this.setState({ inputSelect: value })

    }





    render() {


        return (
            <div>
                <h2>Cadastre o seu serviço</h2>

                <button onClick={this.props.goToPaginaHome} > HOME</button>
                <DivInput>
           
                    <TextField id="outlined-basic" label="Titulo" variant="outlined"
                        value={this.state.title}
                        onChange={this.onChangetitle}
                    
                    />
                    <input
                        placeholder="Descrição*"
                        value={this.state.description}
                        onChange={this.onChangedescription}

                    />
                    <input
                        placeholder="R$"
                        type="number"
                        value={this.state.price}
                        onChange={this.onChangeprice}

                    />
                    <select
                        placeholder="Formas de Pagamento"
                        value={this.state.inputSelect}
                        onChange={this.OnchangeSelect}
                        multiple
                    >
                        <option>Cartão de crédito</option>
                        <option>Cartão de débito</option>
                        <option>Pix</option>
                        <option>PayPal</option>
                        <option>Boleto</option>

                    </select>
                    <input
                        placeholder="Prazo"
                        type="date"
                        value={this.state.dueDate}
                        onChange={this.onChangedueDate}

                    />
                    <button onClick={this.cadastrarServicos} > Cadastrar</button>


                </DivInput>
            </div>
        )



    }
}
