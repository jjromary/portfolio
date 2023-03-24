import Image from "next/image";
import { HomeContainer, SkillImgs, SkillList, SkillsContainer, SkillsContent, SkillStatus } from "../styles/pages/home";

// import projeto1 from '../assets/01.jpg';
// import projeto2 from '../assets/02.jpg';
// import projeto3 from '../assets/03.jpg';
// import projeto4 from '../assets/04.jpg';

import css from '../assets/css.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import next from '../assets/next.png';
import react from '../assets/react.png';
import ts from '../assets/ts.png';

export default function Home() {


  return (
    <HomeContainer>

      <SkillsContainer>
        <SkillsContent>
          <span>Conhecimentos</span>
          <SkillList>
            <SkillStatus>
              Tenho Experiência
            </SkillStatus>
            <SkillImgs>
              <Image src={html} alt='projeto' width={60} height={60} />
              <Image src={css} alt='projeto' width={60} height={60} />
              <Image src={js} alt='projeto' width={60} height={60} />
              <Image src={react} alt='projeto' width={60} height={60} />
              <Image src={ts} alt='projeto' width={60} height={60} />
              <Image src={git} alt='projeto' width={60} height={60} />
            </SkillImgs>
            <SkillStatus>
              Estou Estudando
            </SkillStatus>
            <SkillImgs>
              <Image src={next} alt='projeto' width={60} height={60} />
            </SkillImgs>
          </SkillList>
        </SkillsContent>
      </SkillsContainer>

      {/* <ProjectContent>
        <Project >
          <Image src={projeto1} alt='projeto' width={600} height={480} />

          <footer>
            <strong>Disposable E-mail</strong>
            <span>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1520s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </span>
          </footer>
        </Project>
        <Project >
          <Image src={projeto2} alt='projeto' width={600} height={480} />

          <footer>
            <strong>Disposable E-mail</strong>
            <span>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1520s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </span>
          </footer>
        </Project>
        <Project>
          <Image src={projeto3} alt='projeto' width={600} height={480} />

          <footer>
            <strong>Disposable E-mail</strong>
            <span>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </span>
          </footer>
        </Project>
        <Project >
          <Image src={projeto4} alt='projeto' width={600} height={480} />

          <footer>
            <strong>Disposable E-mail</strong>
            <span>
              Descrição: Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a type specimen book
            </span>
          </footer>
        </Project>
      </ProjectContent> */}


    </HomeContainer>
  )
}
