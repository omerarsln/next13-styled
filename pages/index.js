import styled from "styled-components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <Container>Anasayfa</Container>
    </>
  );
}

const Container = styled.div``;
