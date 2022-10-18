import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Container, SubTitle } from "../../components";

export const ReviewSection = () => {
  const data: Queries.ChefsQuery = useStaticQuery(query);
  return (
    <div className='spacer-xxxl'>
      <Container>
        <SubTitle textAlign='center' weight='semibold'>
          I Nostri Chef
        </SubTitle>
        <div className='flex align-items-center justify-content-between flex-wrap spacer-xl'>
          <div className='div'>review</div>
          <div className='div'>review</div>
          <div className='div'>review</div>
        </div>
      </Container>
    </div>
  );
};

const query = graphql`
  query Chefs {
    allSanityChef {
      nodes {
        complete_name
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
