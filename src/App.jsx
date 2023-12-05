import { useEffect, useState } from "react";
import { getRandomNumber } from "./Helpers/random";
import axios from "axios";
import Location from "./Components/Location";
import ResidentsList from "./Components/ResidentsList";

function App() {
  const [locationInfo, setLocationInfo] = useState(null);
  
  





  useEffect(() => {

    const randomDimension = getRandomNumber(126);

    axios.get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
      .then(({ data }) => setLocationInfo(data))
      .catch((err) => console.log(err));

  }, []);
  


  return (
    <main className="h-auto">

      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo}/>
      <ResidentsList residents={locationInfo?.residents ?? []}/>
    
    </main>
  );
}

export default App;
