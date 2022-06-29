/* eslint-disable camelcase */
import { createContext, useContext, useMemo } from 'react';

interface IContextProps {
  something: string;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const MyCustomProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          something: '',
        }),
        [],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useMyCustomHook = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    throw new Error('useMyCustomHook must be within MyCustomProvider');
  }

  return context;
};
