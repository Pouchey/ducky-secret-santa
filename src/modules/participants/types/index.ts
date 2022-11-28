export type ParticipantType = {
  id: number;
  name: string;
  email: string;
  exclude : number[];
}


export interface ParticipantsState {
  participants: ParticipantType[];
}
export const DefaultParticipantsState = {
  participants: [],
};

export type ParticipantsActionType = {
  type: 'addParticipant' | 'updateParticipant' | 'removeParticipant';
  payload: ParticipantType;
};

export interface ParticipantsContextInterface {
  state: ParticipantsState;
  dispatch: React.Dispatch<ParticipantsActionType>;
}
export const DefaultParticipantsContext = {
  state: DefaultParticipantsState,
  dispatch: () => undefined,
};
