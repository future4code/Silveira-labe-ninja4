import styled from 'styled-components';
export const DivInput =styled.div`
   padding: 20px;
    display: flex;
    flex-direction: row;    
    justify-content: space-around;
    align-items: center;
    font-family: 'Bebas Neue', cursive;
    color: black;
    text-align: center;
    background-color: red;
    border-radius: 5px;
    flex-wrap: wrap;
`
export const FakeButton = styled.span`
display: flex;
justify-content: space-around;
max-width: 200px;
max-height: 80px;
font-size: 1.5rem;
img{
    height: 80px;
    width: 80x;
    /* object-fit: fill; */
}
:hover{
    cursor:pointer;
    background-color: darkgray;
    color: white;
}
:active{
    background-color: black;
    color:white
}
`