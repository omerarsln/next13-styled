import { useContext } from "react";
import styled from "styled-components";
import Button from "../ui/Button.styled";
import Link from "next/link";
import { ThemeContext } from "styled-components";

export default function NavigationBar() {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.name == "light" ? theme.setColorMode("dark") : theme.setColorMode("light");
  };
  return (
    <Container>
      <Link href="/">Anasayfa</Link>
      <Button onClick={handleClick}>Tema</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.nav};
`;
