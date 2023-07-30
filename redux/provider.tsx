'use client';

import { Provider } from 'react-redux';
import store from './store';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const ReduxProvider: FC<Props> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
