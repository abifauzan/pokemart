import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './configs/GlobalStyles'
import { Theme } from './configs/Themes'
import { useThemeMode } from "./hooks/useThemeMode"
import Media from './configs/Media'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail"
import PokemonCollection from "./pages/PokemonCollection/PokemonCollection"

// const Button = styled.button`
//   background: ${({ theme }) => theme.buttonBackground};
//   color: ${({ theme }) => theme.buttonText};
//   width: 100%;

//   ${Media.tab`
//     background: red;
//   `}

//   ${
//     Media.laptop`
//       background: green;
//     `
//   }
// `

function App() {
  const [theme, toggleTheme, isMounted] = useThemeMode()

  const themeMode = theme === 'light' ? Theme.light : Theme.dark
  
  useEffect(() => {

  }, [])

  if (!isMounted) return <div />

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />

      <Router>
        <Layout>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/pokemon/:name' component={PokemonDetail} exact />
            <Route path='/my-pokemon' component={PokemonCollection} exact />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
