import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './configs/GlobalStyles'
import { Theme } from './configs/Themes'
import { useThemeMode } from "./hooks/useThemeMode"
import Media from './configs/Media'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Layout from "./layouts/Layout"
import Home from "./pages/Home"

const Button = styled.button`
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  width: 100%;

  ${Media.tab`
    background: red;
  `}

  ${
    Media.laptop`
      background: green;
    `
  }
`

const About = () => {

  return (
    <h1> About </h1>
  )
}

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
            <Route path='/about' component={About} exact />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
