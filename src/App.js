import React, { useState, useEffect } from 'react'
import Frase from './components/Frase'
import styled from '@emotion/styled'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #ffffff;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  margin-top: 2rem;
  transition: 0.5s ease;

  &:hover {
    cursor: pointer;
    background-size: 400px;
  }
`

function App() {
  // State de Frases
  const [frase, setFrase] = useState({})

  // useEffect Cargar una Frase
  useEffect(() => {
    consultarAPI()
  }, [])

  // Consulta la api y la envia al state
  const consultarAPI = () => {
    // PROMISES
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      .then((respuesta) => respuesta.json())
      .then((resultado) => setFrase(resultado[0]))

    /* ASYNC AWAIT
    const consultarAPI = async()=> {
      const api = awat fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      const frase = awat api.json()
      clg(frase)
    }
    */
  }

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  )
}

export default App
