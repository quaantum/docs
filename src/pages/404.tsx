import { graphql } from "gatsby";
import * as React from "react";

const NotFoundPage = () => {
  return <></>;
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
