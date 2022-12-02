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
      {
        // remove partcipants in exclude lists
        const newParticipants = state.participants.map((participant) => ({
            ...participant,
            exclude: participant.exclude.filter((id) => id !== payload.id),
          }));
        // remove participant
        return {
          ...state,
          participants: newParticipants.filter((participant) => participant.id !== payload.id),
        };
      }
      return {
        ...state,
        participants: state.participants.filter((participant) => participant.id !== payload.id),
      };
  }
};

export default () => React.useReducer(ParticipantsReducer, initialArgs);
