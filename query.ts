export const categoryQuery = `
{
    allSanityCategory {
    nodes {
      _id
      titolo
       ricettario {
        _createdAt
        _id
      }
    }
  }
}
`;

export type CategoryQueryProps = {
  data: {
    allSanityCategory: {
      nodes: {
        titolo: NonNullable<Queries.SanityCategory["titolo"]>;
        _id: NonNullable<Queries.SanityCategory["_id"]>;
        ricettario: {
          _id: NonNullable<Queries.SanityRecipe["_id"]>;
          _createdAt: NonNullable<Queries.SanityRecipe["_createdAt"]>;
        }[];
      }[];
    };
  };
};
