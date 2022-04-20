import styled from 'styled-components';
import Chip from "@material-ui/core/Chip"
export const DivInput =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: red;
    height: 100vh;
    font-family: 'Bebas Neue', cursive;
    text-align: center;
`
export const ButtonContainer = styled.div`
display: flex;
margin: 2rem;
`
export const PaymentChip = styled(Chip)`
    margin: 0 4px;
    height: 28px !important;
`
export const ChipsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 24px;
`