import { graphql } from "gatsby";
import { Box } from "quaantum-components";
import React from "react";
import App from "../components/App";
import DocsNav from "../components/DocsNav";
import { Data } from "../utils/data";

interface DocsProps {
  data: Data;
}

const Docs: React.FC<DocsProps> = ({ data }) => {
  return (
    <App data={data}>
      <Box>
        <DocsNav />
        <Box as='main'></Box>
      </Box>
    </App>
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

export default Docs;
