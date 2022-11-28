import React from 'react';

import { ParticipantsActionType, ParticipantsState, DefaultParticipantsState } from '_modules/participants/types';

const initialArgs = DefaultParticipantsState;

const ParticipantsReducer = (state: ParticipantsState, { type,payload }: ParticipantsActionType) => {
  switch (type) {
    case 'addParticipant':
      return {
        ...state,
        participants: [...state.participants, payload],
      };
    case 'updateParticipant':
      return {
        ...state,
        participants: state.participants.map((participant) => {
          if (participant.id === payload.id) {
            return payload;
          }
          return participant;
        }
        ),
      };
    case 'removeParticipant':
      return {
        ...state,
        participants: state.participants.filter((participant) => participant.id !== payload.id),
      };
  }
};

export default () => React.useReducer(ParticipantsReducer, initialArgs);
