import { Button } from "quaantum-components";
import React from "react";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Button variant='outline' color='purple.100' r='.6rem' w='50vw'>
      Search
    </Button>
  );
};

export default Search;
