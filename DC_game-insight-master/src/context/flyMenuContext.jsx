import { createContext, useContext, useState } from 'react';
import gameData from '../utils/data/data';
const FlyMenuContext = createContext();

export const FlyMenuProvider = ({ children }) => {
  const [flyMenuData, setFlyMenuData] = useState({ loaded: false, ordenated: gameData, inversions: 0 });

  return (
    <FlyMenuContext.Provider value={{ flyMenuData, setFlyMenuData }}>
      {children}
    </FlyMenuContext.Provider>
  );
};

export const useFlyMenuData = () => {
  const { flyMenuData, setFlyMenuData } = useContext(FlyMenuContext);

  return { flyMenuData, setFlyMenuData };
};
