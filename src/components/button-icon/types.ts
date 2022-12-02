import React from 'react';

import { ThemeType } from '_style/theme';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  glyph: string;
  size?: number;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
