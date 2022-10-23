import { Link } from "gatsby";
import React from "react";
import { Button, Container } from "../../components";
import { useCategoryContext } from "./context";

const Paginator = () => {
  const { slug, numOfPages, currentPage } = useCategoryContext();
  const hasNextPage = currentPage < numOfPages;
  return (
    <Container>
      <div
        className='flex align-items-center'
        style={{
          justifyContent:
            currentPage > 1 && hasNextPage
              ? "space-between"
              : currentPage === 1 && hasNextPage
              ? "flex-end"
              : "flex-start",
        }}
      >
        {currentPage > 1 ? (
          <Link
            to={currentPage <= 2 ? `/${slug}/` : `/${slug}/${currentPage - 1}`}
          >
            <Button size='xl'>PrevPage</Button>
          </Link>
        ) : null}
        {hasNextPage ? (
          <Link to={`/${slug}/${currentPage + 1}/`}>
            <Button size='xl'>NextPage</Button>
          </Link>
        ) : null}
      </div>
    </Container>
  );
};

export default Paginator;
