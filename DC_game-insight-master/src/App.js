import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import './styles/styles.css'
import GameListItem from "./components/GameListItem";
import { useFlyMenuData } from "./context/flyMenuContext";
import gameData from "./utils/data/data";

function App() {
  const [slicedGameData, setSlicedGameData] = useState([]);
  const { flyMenuData, setFlyMenuData } = useFlyMenuData();
  const sliceGameData = (gamedata) => {
    const arr = [];
    for (let i = 0; i < 60; i++) {
      arr.push(gamedata[i]);
    }
    return arr;
  };

  useEffect(() => {
    const slice = sliceGameData(flyMenuData.ordenated);
    setSlicedGameData(slice);
    setFlyMenuData({ loaded: false, ordenated: flyMenuData.ordenated });
  }, [flyMenuData.loaded]);

  return (
    <>
      <div className="grid justify-items-center bg-primary min-h-screen">
        <NavigationBar />
        <GameListItem gameProps={slicedGameData} />
        
      </div>
    </>
  );
}

export default App;
