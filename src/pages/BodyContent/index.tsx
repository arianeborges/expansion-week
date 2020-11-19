import React from "react";

import Body from "../../components/Body";

import GoTeamwork from "../../assets/capa.png";

const BodyContent: React.FC = () => {
  return (
    <>
      <Body
        props="after"
        src={GoTeamwork}
        alt="Github Explorer"
        title="Lorem"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <Body
        props="before"
        src={GoTeamwork}
        alt="Github Explorer"
        title="Lorem"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
    </>
  );
};

export default BodyContent;
