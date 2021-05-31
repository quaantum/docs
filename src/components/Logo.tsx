import { Box, Heading } from "quaantum-components";
import React from "react";
import Iso from "./Iso";

interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Box
      as='figure'
      aria-label='quaantum logo'
      color='purple.200'
      d='flex'
      alignItems='center'
      mr='20px'
    >
      <Iso onlyIcon />
      <Heading as='figcaption' fontWeight='700' fontSize='2rem'>
        Quaantum
      </Heading>
    </Box>
  );
};

export default Logo;
