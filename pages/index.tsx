import styled from "styled-components";
import Link from "next/link";
const Wrapper = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  a {
    width: 200px;
    background-color: #eee;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 8px;
    text-decoration: none;
  }
`;

export default function Home() {
  return (
    <Wrapper>
      <Link href="/image">
        <a>Image Component</a>
      </Link>
      <Link href="/script">
        <a>Script Component</a>
      </Link>
      <Link href="/font">
        <a>Font optimization</a>
      </Link>
    </Wrapper>
  );
}
