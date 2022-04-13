import React from "react";
import Axios from "axios";
import { headers } from "../../constants/headers";
import { BASE_URL } from "../../constants/url"


export default class PaginaCarrinho extends React.Component {
    state = {
        carrinho: [],
    }


    componentDidMount = () => {
        this.getAllJobs()
    }
    getAllJobs = async () => {
        try {
            const url = `${BASE_URL}/jobs`
            const response = await Axios.get(url, headers)
            this.setState({ carrinho: response.data.jobs })
        } catch (err) {
            alert('Ih alá! Deu erro... tente novamente.')
            // console.log(err.response)
        }
    }


    // removerJobsCarrinho  = async() => {
    //     try {
    //         const body = {
    //           "message": "Job updated",
    //           "taken": false
    //         }
    //         const url = `${BASE_URL}/jobs/${servicos.id}`
    //         const response = await Axios.post(url, body, headers)
                
    //     } catch (err) {
    //         console.log(err.response.data)   
    //     }
    //   }


    render() {
        console.log(this.state.carrinho)

        const servicosFiltrados = this.state.carrinho.filter((servicos) => {
            return servicos.taken === true

        })
        console.log(servicosFiltrados)
       
        const servicosNoCarrinho = servicosFiltrados.map((servicos) => {
            return (
                <div key={servicos.id}>
                    <strong>{servicos.title}</strong>
                    R$ {servicos.price}
                    <button onClick={this.removerJobsCarrinho}>Deletar</button>

                </div>

            )
        }) 



        return (
                
            <div>
              {servicosNoCarrinho}  

              <h3>Valor Total R$</h3>  <button>Contratar Serviços</button>
            </div>
          
        )

        }
        
}    