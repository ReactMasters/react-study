import { LinkButton } from "@app/components/atoms/Button";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  a {
    margin: 8px;
  }
`;

export default function Page() {
  return (
    <Wrapper>
      <LinkButton href="/next-js-11">next.js 11 new feature</LinkButton>
      <LinkButton href="/form-and-arrow-function">
        form-and-arrow-function
      </LinkButton>
    </Wrapper>
  );
}
