import { useContext } from 'react';
import { StateContext } from '~/providers/StateProvider';

export const useStateContext = () => {
  const context = useContext(StateContext);

  if (context === undefined) {
    throw new Error('useStateContext must be used within a StateProvider');
  }

  return context;
};
