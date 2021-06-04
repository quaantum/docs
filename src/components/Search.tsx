import { Button } from "quaantum-components";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Button
      d='flex'
      columnGap='15px'
      variant='outline'
      alignItems='center'
      color='purple.100'
      r='.6rem'
      w='50vw'
    >
      <BsSearch />
      Search
    </Button>
  );
};

export default Search;
