import { graphql } from "gatsby";
import { Flex, Grid, Heading, Link, Text } from "quaantum-components";
import * as React from "react";
import { Helmet } from "react-helmet";
import App from "../components/App";
import { Data } from "../utils/data";
import { DiGithubBadge, DiReact } from "react-icons/di";
import { BsBook } from "react-icons/bs";

interface IndexPageProps {
  data: Data;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <App data={data}>
      <Grid as='main' placeItems='center' h='80vh'>
        <Flex alignItems='center' direction='column'>
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name='description'
              content={`${data.site.siteMetadata.title} Docs`}
            />
          </Helmet>
          <Heading as='h1' fontSize='3em'>
            Quaantum Components
          </Heading>
          <Heading d='flex' alignItems='center' color='white'>
            Highly customizable and accessible
            <DiReact fontSize='50px' color='lightblue' />
            React UI Components
          </Heading>
          <Flex my='20px'>
            <Link
              styleAs='Button'
              href='/docs'
              d='flex'
              alignItems='center'
              mx='10px'
            >
              <Text mr='10px' d='inline'>
                Docs
              </Text>
              <BsBook />
            </Link>
            <Link
              styleAs='Button'
              href={data.site.siteMetadata.github}
              target='_blank'
              bgColor='black.200'
              d='flex'
              alignItems='center'
              mx='10px'
            >
              <Text mr='10px' d='inline'>
                Github
              </Text>
              <DiGithubBadge fontSize='2em' />
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
