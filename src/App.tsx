import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Siderbar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import themeDark from './themes/dark'
import themeLight from './themes/light'

function App() {
  const [estaUsandoThemeDark, setEstaUsandoThemeDark] = useState(false)

  function trocaTheme() {
    setEstaUsandoThemeDark(!estaUsandoThemeDark)
  }

  return (
    <ThemeProvider theme={estaUsandoThemeDark ? themeDark : themeLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTheme={trocaTheme} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
