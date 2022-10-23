import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Heading } from "../../components";
import { ThemeType } from "../../styles/theme";
import { createSlugFromTitle } from "../../utils";

const CustomBox = styled("div")<any>(({ theme }: { theme: ThemeType }) => ({
  background: theme.colors.yellow[300],
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "8px",
  maxWidth: "264px",
  width: "100%",
  padding: "76px 0px",
  border: "1px solid",
  borderColor: theme.colors.yellow[400],
  trasnition: "all 75ms linear",
  cursor: "pointer",
  ":hover": {
    boxShadow: theme.shadow.heavy,
    background: "#fff",
  },
}));

type Props = {
  title: string | null;
  image?: ImageDataLike | null;
};

const MenuItem = ({ title, image }: Props) => {
  const gatsbyImage = React.useMemo(() => (image ? getImage(image) : null), []);
  return (
    <CustomBox>
      {gatsbyImage ? (
        <div
          style={{
            maxWidth: "64px",
          }}
        >
          <GatsbyImage image={gatsbyImage} alt={title || "placeholder"} />
        </div>
      ) : null}

      <Heading textAlign='center' weight='semibold' className='spacer-lg'>
        {title}
      </Heading>
    </CustomBox>
  );
};

export const RecipeMenu = () => {
  const menu: Queries.MenuQuery = useStaticQuery(query);
  return (
    <div className='flex align-items-center justify-content-between'>
      {menu.allSanityCategory.nodes.map((item) =>
        item.titolo ? (
          <Link
            style={{
              display: "contents",
            }}
            key={item.titolo}
            to={`/${createSlugFromTitle(item.titolo)}/`}
          >
            <MenuItem title={item.titolo} image={item.image?.asset} />
          </Link>
        ) : null,
      )}
    </div>
  );
};

const query = graphql`
  query Menu {
    allSanityCategory {
      nodes {
        titolo
        image {
          asset {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
