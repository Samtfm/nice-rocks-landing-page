
import React, {useState, useEffect} from 'react';
import './FancyFavs.scss';

const FancyFavs = () => {
  const [thingIndex, setThingIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reset, setReset] = useState(false);
  const thingList = [
    "links",
    "books",
    "movies",
    "articles",
    "music",
    "games",
    "recipies",
    "artists",
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setThingIndex(i => (i + 1) % thingList.length)
      setTimeout(() => {
        setReset(true)
        setTimeout(() => {
          setReset(false);
          setVisible(true)
        }, 50)
      }, 700)
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="FancyFavs">
      {"favorite "}
      <span className="FancyFavs-animContainer">
      {reset ? (<>
        <div className={'current immediate'}>{thingList[thingIndex]}</div>
        <div className={'next'}>{thingList[thingIndex+1 % thingList.length-1]}</div>
      </>) : visible ? (<>
        <div className={'current'}>{thingList[thingIndex]}</div>
        <div className={'next'}>{thingList[thingIndex+1 % thingList.length-1]}</div>
      </>) : (<>
        <div className={'prev'}>{thingList[thingIndex > 0 ? thingIndex-1 : thingList.length-1]}</div>
      </>)}
      </span>
    </div>
  )
}

export default FancyFavs;