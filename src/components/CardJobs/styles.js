import styled from 'styled-components';
export const DivInput =styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    padding: 1em;    
    /* width: 30em; */
    background-color: #d9e3f0;
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