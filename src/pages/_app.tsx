import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Description, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        José Romary Brandão Jr
        <span>Desenvolvedor Front-End</span>
        <Description>
          José, é um Desenvolvedor Front-end com 2 anos de experiência profissional.
          Sempre atuou com HTML, CSS, Javascript, React.js, Typescript e Git.
          Hoje ele tem o foco de seus estudos em Next.js.
        </Description>
      </Header>
      <Component {...pageProps} />
    </Container>

  )
}
