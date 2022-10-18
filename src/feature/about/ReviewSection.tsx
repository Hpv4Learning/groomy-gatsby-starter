import React from "react";
import { Container, SubTitle } from "../../components";

export const ReviewSection = () => {
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
