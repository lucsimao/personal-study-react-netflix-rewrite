import React, { useState } from 'react';

import { Caret } from './styled';

const CaretIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  const hoveredIcon = (
    <>
      <Caret
        onMouseLeave={() => setIsHovered(false)}
        onMouseOver={() => setIsHovered(true)}
        size={15}
        isHovered={isHovered}
      />
    </>
  );

  return hoveredIcon;
};

export default CaretIcon;
