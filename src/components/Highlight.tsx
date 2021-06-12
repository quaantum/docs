import React from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";

interface HighlightProps {
  code: string;
  isTS?: boolean;
}

const Highlight: React.FC<HighlightProps> = ({ code, isTS }) => {
  return (
    <SyntaxHighlighter language={isTS ? "typescript" : "javascript"}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Highlight;
