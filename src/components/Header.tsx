import { Flex, Link } from "quaantum-components";
import React from "react";
import Search from "./Search";
import { DiGithubBadge } from "react-icons/di";
import Logo from "./Logo";

interface HeaderProps {
  github: string;
}

const Header: React.FC<HeaderProps> = ({ github }) => {
  return (
    <Flex
      as='header'
      color='white'
      alignItems='center'
      bgColor='black.500'
      p='0 20px'
      h='120px'
      top='20px'
      position='sticky'
      r='15px'
      m='20px'
      justifyContent='space-between'
      boxShadow='0px 0px 5px 7px rgba(0,0,0,.2)'
    >
      <Link href='/' textDecoration='none'>
        <Logo />
      </Link>
      <Search />
      <Link
        href={github}
        styleAs='Button'
        variant='none'
        color='white'
        p='5px'
        target='_blank'
      >
        <DiGithubBadge fontSize='2.5rem' />
      </Link>
    </Flex>
  );
};

export default Header;
