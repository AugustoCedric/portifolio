import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { BotaoThemer, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
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
        <BotaoThemer>Trocar themer</BotaoThemer>
      </SidebarContainer>
    </aside>
  </>
)
export default Sidebar
