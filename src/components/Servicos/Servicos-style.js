import styled from 'styled-components'


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 450px); //Regular somente a altura do Card, a largura deve ser regulada aqui.
  justify-content: center;
  grid-gap: 10px;
`
export const Span = styled.span`
  
  /* width: 300px; */ // Não colocar width, somente height.
  height: 200px;

`
export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const FakeButton = styled.span`
cursor:pointer;
margin: 8px;
padding: 4px;
`
export const SearchContainer = styled.div`
    position: relative;
    left: 0;
    right: 0;
    margin-right: 160px;
    border-radius: 8px;
    color: black;
    margin-left: 0;
    padding: 4px;
    display: flex;
    align-items: center;
    width: 400px;

`
export const Main = styled.div`
background-color: white;
`