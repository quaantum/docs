import { Box } from "quaantum-components";
import React from "react";
import { Data } from "../utils/data";
import App from "./App";
import DocsNav from "./DocsNav";

interface DocsProps {
  data: Data;
}

const Docs: React.FC<DocsProps> = ({ data, children }) => {
  return (
    <App data={data}>
      <Box>
        <DocsNav />
        <Box d='inline-block'>{children}</Box>
      </Box>
    </App>
  );
};

export default Docs;
