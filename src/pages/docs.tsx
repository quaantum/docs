import { Box, Grid, Heading } from "quaantum-components";
import React from "react";
import App from "../components/App";

interface docsProps {}

const docs: React.FC<docsProps> = ({}) => {
  return (
    <App>
      <Box>
        <Grid as='nav'>
          <Heading>Quaantum Components</Heading>
        </Grid>
        <Box as='main'></Box>
      </Box>
    </App>
  );
};

export default docs;
