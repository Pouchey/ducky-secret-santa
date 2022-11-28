export interface UIState {
  showLoader: boolean;
}
export const DefaultUIState = {
  showLoader: false,
};

export type UIActionType = {
  type: 'showLoader' | 'hideLoader';
};

export interface UIContextInterface {
  state: UIState;
  dispatch: React.Dispatch<UIActionType>;
}
export const DefaultUIContext = {
  state: DefaultUIState,
  dispatch: () => undefined,
};
