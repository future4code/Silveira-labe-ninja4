import styled from 'styled-components';


export const CardCarrinho = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    align-items: center;
    font-family: 'Bebas Neue', cursive;
    color: black;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    cursor: pointer;    
    background-color: black ;
    align-items: center;
    justify-content: space-around;
    margin-left: 25em;
    margin-top: 10em;
    margin-right: 15em;
    border-radius: 2em;
    color: white;
        
` 
export const ButtonHome = styled.button`
    cursor: pointer;
    background-color: red;
    border: 1px white solid;
    

`
export const HeaderHome = styled.header`
    background-color: red;   
`

export const ContainerCarrinho =styled.div`
    margin-left: 25em;
    margin-top: 10em;
    margin-bottom: 1em;
    margin-right: 15em;
    border-radius: 2em;
    background-color: red;
   
`
export const ButtonDelete = styled.button`
    border-radius: 1em;
    background-color: black;
    color: white;
    width: 5em;
    height: 2em;
`