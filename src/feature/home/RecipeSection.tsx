import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Container, Recipe, SubTitle } from "../../components";
import { createSlugFromTitle } from "../../utils";

const RecipeSection = () => {
  const data: Queries.Last8RecipesQuery = useStaticQuery(query);
  return (
    <div>
      <Container>
        <SubTitle weight='semibold'>Ricette più recenti</SubTitle>
      </Container>
      <Container className='spacer-xl'>
        <div className='flex justify-content-between flex-wrap'>
          {data.allSanityRecipe.nodes.map((recipe) => (
            <Link
              key={recipe.titolo}
              to={`/${createSlugFromTitle(
                recipe.category?.titolo,
              )}/${createSlugFromTitle(recipe.titolo)}/`}
              style={{ marginBottom: "34px" }}
            >
              <Recipe
                title={recipe.titolo}
                image={recipe.image?.asset}
                description={recipe.riassunto}
                chef={recipe.cokkedby?.complete_name}
                style={{
                  height: "100%",
                }}
              />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

const query = graphql`
  query Last8Recipes {
    allSanityRecipe(limit: 8, sort: { fields: _createdAt, order: DESC }) {
      nodes {
        titolo
        riassunto
        image {
          asset {
            gatsbyImageData
          }
        }
        category {
          titolo
        }
        cokkedby {
          complete_name
        }
      }
    }
  }
`;

export default RecipeSection;
