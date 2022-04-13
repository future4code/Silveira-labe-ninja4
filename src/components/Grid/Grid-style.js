import styled from 'styled-components'

export const Container = styled.div`
  border: 1px black solid;
  display: grid;
  grid-template-columns: repeat(auto-fit, 450px); //Regular somente a altura do Card, a largura deve ser regulada aqui.
  justify-content: center;
  grid-gap: 10px;
`
export const Span = styled.span`
  border: 1px black solid;
  /* width: 300px; */ // Não colocar width, somente height.
  height: 200px;
`