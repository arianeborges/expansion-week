import React from "react";

import Body from "../../components/Body";

import Feedback from "../../assets/feedbacks.png";
import Teamwork from "../../assets/teamwork.png";
import Differences from "../../assets/differences.png";

const BodyContent: React.FC = () => {
  return (
    <>
      <Body
        props="after"
        src={Teamwork}
        alt="Github Explorer"
        title="Comunique, todo dia, de todo jeito"
        text="Uma boa comunicação é a base de um trabalho em equipe. Seja claro, saiba ouvir, não tenha medo de perguntar e faça reuniões informais."
      />
      <Body
        props="before"
        src={Feedback}
        alt="Github Explorer"
        title="Peça feedbacks"
        text="Seja positivo ou negativo, receber um feedback é sempre construtivo para o seu crescimento pessoal. O feedback tem o objetivo de apontar o que pode ser melhorado e apresentar meios para que isso aconteça."
      />
      <Body
        props="after"
        src={Differences}
        alt="Github Explorer"
        title="Aceite as diferenças"
        text="Não julgue o colega de time por expressar sua opinião. Não jogue favoritos com base em sua própria personalidade. Faça diferente no modo como aborda e aprecia as diferentes opiniões."
      />
    </>
  );
};

export default BodyContent;
