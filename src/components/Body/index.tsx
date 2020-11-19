import React from "react";

import { Container } from "./styles";

interface BodyProps {
  title: string;
  text: string;
  alt: string;
  src: string;
  props: "after" | "before";
}

const BodyContent: React.FC<BodyProps> = ({
  src,
  alt,
  title,
  text,
  props,
}: BodyProps) => {
  return (
    <Container>
      {props === "before" ? <img src={src} alt={alt} /> : ""}

      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      {props === "after" ? <img src={src} alt={alt} /> : ""}
    </Container>
  );
};

export default BodyContent;
