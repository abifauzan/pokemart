import React, { useEffect } from "react"
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './configs/GlobalStyles'
import { Theme } from './configs/Themes'
import { useThemeMode } from "./hooks/useThemeMode"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import PokemonDetail from "./pages/PokemonDetail/PokemonDetail"
import PokemonCollection from "./pages/PokemonCollection/PokemonCollection"
import { GlobalProvider } from './contexts/GlobalState'

function App() {
  const [theme, isMounted] = useThemeMode()

  const themeMode = theme === 'light' ? Theme.light : Theme.dark

  if (!isMounted) return <div />

  return (
    <GlobalProvider>
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
    </GlobalProvider>

  );
}

export default App;
