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
      <LinkButton href="/form-and-arrow-function/basic">κΈ°λ³Έ</LinkButton>
      <LinkButton href="/form-and-arrow-function/bad">
        π‘ μ§μ§ λμ κ±°
      </LinkButton>
      <LinkButton href="/form-and-arrow-function/not-bad">
        π€« λ€ λμ κ±°
      </LinkButton>
      <LinkButton href="/form-and-arrow-function/good">π μ’μ κ±°</LinkButton>
    </Wrapper>
  );
}
