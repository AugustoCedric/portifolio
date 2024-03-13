import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { BotaoTheme, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTheme: () => void
}

const Sidebar = (props: Props) => (
  <>
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Cedric</Title>
        <Paragrafo tipo="secundario" fontSize={16}>
          augustocedric
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro front-end
        </Descricao>
        <BotaoTheme onClick={props.trocaTheme}>Trocar themer</BotaoTheme>
      </SidebarContainer>
    </aside>
  </>
)
export default Sidebar
