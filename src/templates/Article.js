import React from "react";
import styled from "styled-components";
import { Container } from "../components";
import { Layout } from "../components/layout/Layout";

const ImageArticleBox = styled("div")({
  overflow: "hidden",
  borderRadius: "16px",
  width: "100%",
  maxHeight: "529px",
});

const FixedBox =
  styled("div") <
  any >
  (({ theme }) => ({
    border: "1px solid",
    borderColor: theme.colors.gray[400],
    borderRadius: "12px",
    padding: "16px",
    position: "sticky",
    top: "34px",
    right: "0px",
    width: "100%",
    "& > *": {
      marginBottom: "12px",
    },
  }));

const Article = () => {
  return (
    <Layout>
      <Container></Container>
      <div className='spacer-xxl'></div>
    </Layout>
  );
};

export default Article;
