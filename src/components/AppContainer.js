import React, { Component } from 'react'
import styled from 'styled-components'




const Home = styled.div`
font-family: 'Bebas Neue', cursive;
background-color: red;
color: white;
min-height: 100vh;
`
const Button = styled.button`
background-color: black;
color: white;
padding: 20px;
width: 200px;
border-radius: 20px;
font-size: larger;
 font-family: 'Bebas Neue', cursive;;
 cursor: pointer;
 display: flex;
 justify-content: center;
 border: 1px solid beige;
`
const Button2 = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 250px;
padding: 10px;
`
const Labeninja = styled.h1`
display: flex;
justify-content: center;
height: 26px;
color: beige;
`
const Labeninja1 = styled.h1`
display: flex;
justify-content: center;
height: 26px;
margin-left: -150px;
color: black;
`
const Paragrafo = styled.h1`
display: flex;
justify-content: center;
height: 26px;
margin-left: -50px;
margin-top: 100px;

`
const Header = styled.header`
background-color: red;
padding: 10px;
display: flex;
justify-content: space-between;
justify-content: space-around;
cursor: pointer;

`
export class AppContainer extends Component {
  render() {
    return (
      <Home>
      <Header>
      
        <h3 >Instagram</h3> <h3>Facebook</h3><h3>Twitter</h3>
     
      </Header>
     
     <Labeninja1><h1>Labe</h1> </Labeninja1>
     <Labeninja><h1>Ninja</h1></Labeninja>
    
    
     
     <Paragrafo> <h2>O talento certo, no momento certo!</h2></Paragrafo>
     <Button2>
      <Button>Quero Ser um Ninja  </Button>
      <br></br>
      <Button>Quero Comprar um Ninja  </Button>
      </Button2>
        
        </Home>
       
      
    )
  }
}
