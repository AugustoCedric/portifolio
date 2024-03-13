import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nobis, iste
      delectus deserunt incidunt rerum laudantium, ipsa suscipit magni,
      provident illum? Nulla sequi doloremque voluptatem esse, itaque soluta
      totam autem.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=augustocedric&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=augustocedric&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
