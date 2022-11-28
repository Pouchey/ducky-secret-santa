import React from 'react';

import { UIContextInterface, DefaultUIContext } from '_modules/ui/types';

import useUIReducer from './useReducer';

const UIContext =
  React.createContext<UIContextInterface>(DefaultUIContext);
UIContext.displayName = 'UI';

export const useUIContext = () => React.useContext(UIContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const UIProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useUIReducer();
  const value = { state, dispatch };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
