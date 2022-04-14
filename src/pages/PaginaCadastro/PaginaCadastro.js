import React from "react";
import { PaymentChip, FormContainer, CardCadastroContainer, ButtonContainer, Titulo} from "./styles"
import axios from "axios";
import { headers } from "../../constants/headers";
import { BASE_URL } from "../../constants/url"
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from "@material-ui/core/FormControl"
import Button from "@material-ui/core/Button"


const listaDeMetodosPagamentos = [
    "Cartão de crédito",
    "Cartão de Débito",
    "Pix",
    "PayPal",
    "Boleto"
]

export default class PaginaCadastro extends React.Component {
    state = {
        title: "",
        description: "",
        price: "",
        paymentMethods: [],
        dueDate: ""
    }

    cadastrarServicos = async () => {
        try {
            const body = {
                title: this.state.title,
                description: this.state.description,
                price: Number(this.state.price),
                paymentMethods: this.state.paymentMethods,
                dueDate: this.state.dueDate
            }
            const response = await axios.post(`${BASE_URL}/jobs`, body, headers)
            alert("Cadastro realizado com sucesso!")
            this.setState({ title: "", description: "", price: "", paymentMethods: [], dueDate: "" })
        }
        catch (err) {
            alert(err.response.data.message)
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
    onChangedueDate = (e) => {
        this.setState({ dueDate: e.target.value })

    }
    onchangeSelect = (e) => {
        this.setState({ paymentMethods: e.target.value })
    }


    render() {



        return (
            <CardCadastroContainer>
                <button onClick={this.props.goToPaginaHome} > HOME</button>
                
                <Titulo><strong>Cadastre o seu serviço</strong></Titulo>


                <FormContainer>
                    <TextField id="outlined-basic" label="Titulo" variant="outlined" size="small" margin="normal"
                        value={this.state.title}
                        onChange={this.onChangetitle}

                    />
                    <TextField id="outlined-basic" label="Descrição" variant="outlined" size="small" margin="normal"
                        value={this.state.description}
                        onChange={this.onChangedescription}

                    />
                    <TextField id="outlined-basic" label="R$" variant="outlined" size="small" margin="normal"
                        type="number"
                        value={this.state.price}
                        onChange={this.onChangeprice}

                    />
                    <FormControl margin="normal" variant="outlined" size="small">
                        <InputLabel>Formas de Pagamento</InputLabel>
                        <Select 
                            
                            value={this.state.paymentMethods}
                            onChange={this.onchangeSelect}
                            multiple
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((value) => {
                                        return <PaymentChip color="primary" key={value} label={value} />
                                    })}
                                </div>
                            )}
                        >
                            {listaDeMetodosPagamentos.map((name) => {
                                return <MenuItem key={name} value={name}> {name}</MenuItem>
                            })}
                        </Select>
                    </FormControl>

                    <TextField id="outlined-basic" label="" variant="outlined" size="small" margin="normal"
                        type="date"
                        value={this.state.dueDate}
                        onChange={this.onChangedueDate}
                    />

                    <ButtonContainer>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={this.cadastrarServicos}> Cadastrar
                        </Button>
                    </ButtonContainer>



                </FormContainer>


            </CardCadastroContainer >
        )



    }
}