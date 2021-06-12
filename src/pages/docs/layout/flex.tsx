import { graphql } from "gatsby";
import { Flex, Heading, Link, Text } from "quaantum-components";
import React from "react";
import Docs from "../../../components/Docs";
import Highlight from "../../../components/Highlight";
import { Data } from "../../../utils/data";
interface FlexPageProps {
  data: Data;
}

const FlexPage: React.FC<FlexPageProps> = ({ data }) => {
  const code = `<Flex bgColor="rebeccapurple" color="white">I'm a Box</Flex>`;
  return (
    <Docs data={data}>
      <Heading as='h1'>Flex</Heading>
      <Text my='5px'>
        Flex is a component built on top of{" "}
        <Link href='/docs/layout/box'>Box</Link> it has a flex display by
        default and some handy shorthands for styling properties.
      </Text>
      <Text my='5px'>
        By default, it renders a div element, but you can change it with the
        "as" prop.
      </Text>
      <Text my='5px'>
        You can also set any default styles you need in the Quaantum Theme in
        the components section as Flex.
      </Text>
      <Flex bgColor='rebeccapurple' color='white' p='10px'>
        I'm a Flex
      </Flex>
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

export default FlexPage;
