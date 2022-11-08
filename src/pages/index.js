import * as React from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Display,
  Heading,
  Label,
  Paragraph,
  SubTitle,
} from "../components";

const Prova = styled.div(({ theme }) => ({
  width: "400px",
  height: "400px",
  background: theme.colors.orange[400],
}));

const IndexPage = () => {
  return (
    <main>
      <Prova />
      <Label weight='bold'>Lorem ipsum dolor sit amet.</Label>
      <Paragraph>Lorem ipsum dolor sit amet.</Paragraph>
      <Heading>Lorem ipsum dolor sit amet.</Heading>
      <SubTitle color='red'>Lorem ipsum dolor sit amet.</SubTitle>
      <Display as='h2' weight='semibold'>
        Lorem ipsum dolor sit amet.
      </Display>

      <Container
        style={{
          marginTop: "48px",
        }}
      >
        <Button isRounded size='sm'>
          Premimi
        </Button>
        <Button
          rightIcon={<div> --k </div>}
          isRounded
          variant='outlined'
          color='purple'
          size='sm'
        >
          Premimi
        </Button>
        <Button leftIcon={<div> --k </div>} isRounded color='purple' size='sm'>
          Premimi
        </Button>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
