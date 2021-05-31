import { Box } from "quaantum-components";
import { QuaantumProps } from "quaantum-components/css/types";
import React from "react";
import { DiReact } from "react-icons/di";

interface IsoProps extends QuaantumProps {
  onlyIcon?: boolean;
}

const Iso: React.FC<IsoProps> = ({ onlyIcon, ...props }) => {
  const Icon = (
    <Box
      position='relative'
      d='flex'
      alignItems='center'
      color='purple.200'
      {...(onlyIcon ? props : {})}
    >
      <DiReact fontSize='80px' />
      <DiReact
        fontSize='80px'
        style={{ position: "absolute", left: "4px", top: "4px" }}
      />
    </Box>
  );

  if (onlyIcon) return Icon;

  return (
    <Box as='figure' aria-label='quaantum logo' {...props}>
      {Icon}
    </Box>
  );
};

export default Iso;
