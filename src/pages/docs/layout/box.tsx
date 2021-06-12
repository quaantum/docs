import { graphql } from "gatsby";
import { Box, Heading, Text } from "quaantum-components";
import React from "react";
import Docs from "../../../components/Docs";
import Highlight from "../../../components/Highlight";
import { Data } from "../../../utils/data";
interface BoxPageProps {
  data: Data;
}

const BoxPage: React.FC<BoxPageProps> = ({ data }) => {
  const code = `
    <Box bgColor="rebeccapurple" color="white">I'm a Box</Box>
  `;
  return (
    <Docs data={data}>
      <Heading as='h1'>Box</Heading>
      <Text my='5px'>
        Box is one of the most abstract and simple components.
      </Text>
      <Text my='5px'>
        By default, it renders a div element, but you can change it with the
        "as" prop.
      </Text>
      <Text my='5px'>
        You can also set any default styles you need in the Quaantum Theme in
        the components section as Box.
      </Text>
      <Box bgColor='rebeccapurple' color='white' p='10px'>
        I'm a Box
      </Box>
      <Highlight code={code} isTS />
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

export default BoxPage;
