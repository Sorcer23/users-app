import { createContext, useContext } from 'react';
import { RootStore } from 'src/store/rootStore';

export const RootStoreContext = createContext<RootStore | null>(null);

export const useRootStore = () => {
  const context = useContext(RootStoreContext);

  if (context === null) {
    throw new Error('RootStoreProvider is not set');
  }

  return context;
};
