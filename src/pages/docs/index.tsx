import { graphql } from "gatsby";
import { Box } from "quaantum-components";
import React from "react";
import Docs from "../../components/Docs";
import { Data } from "../../utils/data";

interface DocsPageProps {
  data: Data;
}

const DocsPage: React.FC<DocsPageProps> = ({ data }) => {
  return (
    <Docs data={data}>
      <Box as='main'></Box>
    </Docs>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        github
      }
    }
  }
`;

export default DocsPage;
