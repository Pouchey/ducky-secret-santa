import Loader from '_components/loader';
import { UIProvider } from '../hooks/useContext';

import { StyledContent, StyledMain } from './style';
import Topbar from './topbar';

export default ({ children }: { children: React.ReactNode }) => (
  <StyledMain>
    <UIProvider>
      <Topbar />
      <StyledContent>{children}</StyledContent>
      {/* <Loader/> */}
    </UIProvider>
  </StyledMain>
);
