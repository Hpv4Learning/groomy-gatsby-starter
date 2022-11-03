import React from "react";
import styled from "styled-components";

const Wrapper = styled("div")<any>({
  height: "calc( 100vh - 72px )",
  width: "100%",
  display: "flex",
  position: "relative",
});

const LastRecipe = () => {
  return (
    <></>
    // <Wrapper>
    //   <div
    //     style={{
    //       position: "absolute",
    //       top: "0px",
    //       left: "0px",
    //       bottom: "0px",
    //       right: "0px",
    //     }}
    //   >
    //     <div
    //       className='flex flex-column justify-content-center'
    //       style={{
    //         background: theme.colors.yellow[400],
    //         maxWidth: "50%",
    //         width: "100%",
    //         height: "100%",
    //       }}
    //     />

    //     <div
    //       className='flex flex-column justify-content-center'
    //       style={{
    //         width: "100%",
    //       }}
    //     />
    //   </div>
    //   <Container
    //     style={{
    //       zIndex: 2,
    //       display: "flex",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <div
    //       className='flex flex-column justify-content-center'
    //       style={{
    //         background: theme.colors.yellow[400],
    //         width: "100%",
    //         height: "100%",
    //       }}
    //     >
    //       <div style={{}}>
    //         <Display weight='semibold'>{titolo}</Display>
    //         <div
    //           className='spacer-md'
    //           style={{
    //             maxWidth: "596px",
    //           }}
    //         >
    //           <Heading>{riassunto}</Heading>
    //         </div>
    //         <div className='spacer-lg'>
    //           <Link to={`/${slug}/${createSlugFromTitle(titolo)}/`}>
    //             <Button color='orange' size='xl'>
    //               Scropri di più
    //             </Button>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //     <div
    //       className='flex flex-column justify-content-center'
    //       style={{
    //         width: "100%",
    //         height: "100%",
    //         alignItems: "flex-end",
    //       }}
    //     >
    //       {gastbyImage ? (
    //         <div>
    //           <RoundedImageContainer>
    //             <GatsbyImage
    //               image={gastbyImage}
    //               alt={titolo || "Last Recipe Image"}
    //               loading='eager'
    //               style={{
    //                 height: "100%",
    //                 width: "100%",
    //               }}
    //             />
    //           </RoundedImageContainer>
    //         </div>
    //       ) : null}
    //     </div>
    //   </Container>
    // </Wrapper>
  );
};

export default LastRecipe;
