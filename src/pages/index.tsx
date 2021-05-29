import { graphql } from "gatsby";
import { Flex, Grid, Heading, Link } from "quaantum-components";
import * as React from "react";
import { Helmet } from "react-helmet";
import App from "../components/App";

const IndexPage = ({ data }) => {
  return (
    <App>
      <Grid as='main' placeItems='center' h='100vh'>
        <Flex alignItems='center' direction='column'>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name='description'
              content='{data.site.siteMetadata.title} Docs'
            />
          </Helmet>
          <Heading as='h1' fontSize='3em'>
            Quaantum Components
          </Heading>
          <Flex>
            <Link styleAs='Button' href='/docs'>
              Get Started
            </Link>
            <Link
              styleAs='Button'
              href={data.site.siteMetadata.github}
              bgColor='black.200'
            >
              Github
            </Link>
          </Flex>
        </Flex>
      </Grid>
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

export default IndexPage;
