import React from 'react';

import { UIActionType, UIState, DefaultUIState } from '_modules/ui/types';

const initialArgs = DefaultUIState;

const UIReducer = (state: UIState, { type }: UIActionType) => {
  switch (type) {
    case 'showLoader':
      return {
        ...state,
        showLoader: true,
      };
    case 'hideLoader':
      return {
        ...state,
        showLoader: false,
      };
  }
};

export default () => React.useReducer(UIReducer, initialArgs);
