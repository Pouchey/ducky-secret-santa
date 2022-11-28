import React from 'react';

import { ParticipantsContextInterface, DefaultParticipantsContext } from '_modules/participants/types';

import useParticipantsReducer from './useReducer';

const ParticipantsContext =
  React.createContext<ParticipantsContextInterface>(DefaultParticipantsContext);
ParticipantsContext.displayName = 'Participants';

export const useParticipantsContext = () => React.useContext(ParticipantsContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const ParticipantsProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useParticipantsReducer();
  const value = { state, dispatch };

  return <ParticipantsContext.Provider value={value}>{children}</ParticipantsContext.Provider>;
};
