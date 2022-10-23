import * as React from "react";
import type { HeadFC } from "gatsby";
import { Layout } from "../components/layout/Layout";
import HomeHero from "../feature/home/HomeHero";
import { RecipeMenu } from "../feature/home/RecipeMenu";
import RecipeSection from "../feature/home/RecipeSection";
import { Container } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <HomeHero />
      <div className='spacer-xxxl'>
        <Container>
          <RecipeMenu />
        </Container>
      </div>

      <div className='spacer-xxxl'>
        <RecipeSection />
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
