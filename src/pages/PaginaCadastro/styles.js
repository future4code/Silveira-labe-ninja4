import styled from "styled-components"
import Chip from "@material-ui/core/Chip"


export const PaymentChip = styled(Chip)`
    margin: 2px;
    height: 28px !important;
    color: black;
`

export const FormContainer = styled.div`
    width: 70vw;
    max-width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 12px;
    background-color: white;
    color: white;
    `
export const CardCadastroContainer = styled.div`
    height: 100vh; 
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', cursive;
    background-color: red;
    color: black;
    `
export const ButtonContainer = styled.button`
    width: 100%;
    margin-top: 16px;
`
export const Titulo = styled.div`
    width: 70vw;
    font-size: 4em;
    display: flex;
    justify-content: center;

`
export const ButtonHome = styled.button`
    cursor: pointer;
    background-color: red;
    border: 1px white solid;

`
export const HeaderHome = styled.header`
     background-color: red;   
`