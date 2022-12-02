import React from 'react';




import { StyledTitle, StyledTopBar } from './style';

export default React.memo(() => {

  return (
    <StyledTopBar>
      <StyledTitle>Ducky Secret Santa</StyledTitle>
    </StyledTopBar>
  );
});
