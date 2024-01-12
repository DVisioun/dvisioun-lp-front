import { atom } from "jotai";

interface AboutInterface {
  id: number;
  imgPath: string;
  name: string;
  surname: string;
  description: string;
}

export const aboutAtom = atom<AboutInterface[]>([
  {
    id: 1,
    imgPath: "/images/about/lucas.jpg",
    name: "Lucas",
    surname: "Maclean",
    description: "Desenvolvedor Web Full Stack, formado em Tecnologia na Escola DNC. Trabalho na área da programação há mais de 1 ano, com experiência em React.js, TypeScript, Tailwind, Git/Github, Figma, SCSS, Node.js, Express.js, MongoDB, MySQL e Jest. Também sou professor de programação, atuando mais forte com as tecnologias que envolvem o Front-end.Busco sempre criar soluções em qualquer área e acredito que com a tecnologia possamos alavancar e levar essas soluções para um determinado lugar e impactar de forma genuína a vida das pessoas, levando conosco geração de valor e conexão.",
  },
  {
    id: 2,
    imgPath: "/images/about/luana.jpg",
    name: "Luana",
    surname: "Beatriz",
    description: "Graduada em Design de Jogos Digitais, mas sempre busquei desenvolver as minhas capacidades na área da programação. Trabalhei por 8 meses como desenvolvedora web anteriormente, trabalhando principalmente com o wordpress. E desde agosto de 2021 estou a trabalhar como desenvolvedora web full stack trabalhando principalmente com HTML, CSS, Javascript e PHP. Também estou fazendo uma formação full stack em tecnologia pela escola DNC, em busca de aprender novas tecnologias, principalmente React.js e Node.js.",
  },
  {
    id: 3,
    imgPath: "/images/about/eric.jpg",
    name: "Eric",
    surname: "Kunzel",
    description: "Desenvolvedor Web Full Stack, atuando principalmente com React, Node, Express, Fastify e Tailwind, e utilizando bases de dados MongoDB, PostgreSQL e MySQL. Sou movido pela curiosidade, código e pelo desafio de entregar soluções eficientes e eficazes. Acredito que tudo é possível no mundo da tecnologia, e com o trabalho em equipe podemos chegar muito mais longe.",
  },
]);
