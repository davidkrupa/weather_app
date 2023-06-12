import { useState } from "react";
import "./App.css";
import { Header, Locations, Search } from "./components";

function App() {
  const [previousLocations, setPreviousLocations] = useState([]);

  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen font-montserrat text-slate-950 bg-gradient-to-b from-sky-200 to-indigo-200">
      <Search
        previousLocations={previousLocations}
        setPreviousLocations={setPreviousLocations}
      />
      <Locations
        previousLocations={previousLocations}
        setPreviousLocations={setPreviousLocations}
      />
    </div>
  );
}

export default App;
