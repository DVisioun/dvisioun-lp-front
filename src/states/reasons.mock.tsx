import { atom } from "jotai";

interface ReasonsInterface {
  id: number;
  imgPath: string;
  title: string;
  text: string;
}

export const reasonsAtom = atom<ReasonsInterface[]>([
  {
    id: 1,
    imgPath: "/images/reasons/1.svg",
    title: "Expansão das Oportunidades de Vendas e Receitas",
    text: "Ao estabelecer a sua presença online, a empresa pode alcançar um público mais amplo, aumentando suas oportunidades de vendas. A disponibilidade 24/7 permite que os clientes façam compras a qualquer momento, proporcionando um potencial significativo para aumentar as receitas.",
  },
  {
    id: 2,
    imgPath: "/images/reasons/2.svg",
    title: "Visibilidade e Alcance Global",
    text: "Estar na internet permite que sua empresa alcance um público global 24 horas por dia, sete dias por semana. A presença online amplia a visibilidade da marca, atingindo clientes em diferentes regiões geográficas e fusos horários, alavancando o seu potencial de crescimento.",
  },
  {
    id: 3,
    imgPath: "/images/reasons/3.svg",
    title: "Suporte Personalizado",
    text: "A presença online oferece uma oportunidade valiosa para fornecer suporte personalizado aos clientes. Plataformas de chat ao vivo, e-mails e redes sociais permitem uma comunicação direta e rápida. O atendimento personalizado constrói relacionamentos mais fortes, demonstra cuidado com o cliente e pode resultar em maior fidelização.",
  },
]);
