import { atom } from "jotai";

interface SolutionInterface {
  id: number;
  imgPath: string;
  title: string;
  description: string;
}

export const solutionAtom = atom<SolutionInterface[]>([
  {
    id: 1,
    imgPath: "/icon1.png",
    title: "Visibilidade e Alcance",
    description:
      "Um site na internet pode ser acessado de qualquer lugar do mundo, a qualquer hora. Isso significa que, ao ter um site, você pode aumentar a visibilidade e o alcance da sua empresa ou marca para um público global.",
  },
  {
    id: 2,
    imgPath: "/icon2.png",
    title: "Análise de Dados",
    description:
      "Um site pode ajudá-lo a coletar e analisar dados sobre seus clientes e visitantes. Por exemplo, você pode usar ferramentas de análise da web para monitorar o tráfego do site, entender o comportamento do usuário e obter insights sobre o desempenho do site. Essas informações podem ajudá-lo a tomar decisões de negócios mais informadas e a melhorar o desempenho do seu site.",
  },
  {
    id: 3,
    imgPath: "/icon3.png",
    title: "Atendimento ao Cliente",
    description:
      "Seu site pode ser uma plataforma para melhorar o atendimento ao cliente. Por exemplo, você pode incluir uma seção de perguntas frequentes (FAQ) para ajudar seus clientes a obter respostas para suas dúvidas, oferecer suporte por chat ou e-mail, e permitir que seus clientes façam compras online de forma fácil e segura.",
  },
  {
    id: 4,
    imgPath: "/icon4.png",
    title: "Credibilidade",
    description:
      "Ter um site profissional bem projetado pode aumentar a credibilidade da sua empresa ou marca. As pessoas tendem a confiar mais em empresas que têm um site bem projetado e atualizado.",
  },
  {
    id: 5,
    imgPath: "/icon5.png",
    title: "Vendas e Conversões",
    description:
      "Ter um site profissional e bem otimizado pode aumentar as vendas de uma empresa, permitindo que sua marca seja vista por um público maior e oferecendo uma experiência de compra conveniente e segura aos clientes. Para maximizar o impacto nas vendas, é importante investir em um site otimizado e contar com a ajuda de profissionais qualificados. Não perca mais tempo, invista em um site profissional e alcance resultados incríveis para o seu negócio.",
  },
  {
    id: 6,
    imgPath: "/icon6.png",
    title: "Marketing e Publicidade",
    description:
      "Um site pode ser uma poderosa ferramenta de marketing e publicidade. Você pode usar seu site para promover seus produtos ou serviços, oferecer descontos e promoções, publicar conteúdo interessante e útil para seus clientes e muito mais.",
  },
]);
