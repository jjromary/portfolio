import Image from "next/image";
import { HomeContainer, Project, ProjectContent, ProjectDescription, ProjectLink, ProjectsContainer, ProjectsList, SkillImgs, SkillList, SkillsContainer, SkillsContent, SkillStatus } from "../styles/pages/home";


import projeto1 from '../assets/01.jpg';

import { CaretRight } from "phosphor-react";
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
              <Image src={html} alt='projeto' width={50} height={50} />
              <Image src={css} alt='projeto' width={50} height={50} />
              <Image src={js} alt='projeto' width={50} height={50} />
              <Image src={react} alt='projeto' width={50} height={50} />
              <Image src={ts} alt='projeto' width={50} height={50} />
              <Image src={git} alt='projeto' width={50} height={50} />
            </SkillImgs>
            <SkillStatus>
              Estou Estudando
            </SkillStatus>
            <SkillImgs>
              <Image src={next} alt='projeto' width={50} height={50} />
            </SkillImgs>
          </SkillList>
        </SkillsContent>
      </SkillsContainer>

      <ProjectsContainer>
        <ProjectContent>
          <span>Projetos</span>
          <ProjectsList>
            <Project >
              <Image src={projeto1} alt='projeto' width={600} height={200} />

              <ProjectDescription>
                <strong>Disposable E-mail</strong>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1520s, when an.
                </span>

                <ProjectLink>
                  Acessar <CaretRight />
                </ProjectLink>
              </ProjectDescription>

            </Project>


          </ProjectsList>
        </ProjectContent>
      </ProjectsContainer>



    </HomeContainer>
  )
}
