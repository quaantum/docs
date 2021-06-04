import { graphql } from "gatsby";
import { Heading } from "quaantum-components";
import * as React from "react";

const NotFoundPage = () => {
  return (
    <>
      <Heading>404</Heading>
    </>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default NotFoundPage;
