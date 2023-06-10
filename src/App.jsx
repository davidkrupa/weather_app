import "./App.css";
import { Header, Locations, Search } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center justify-between w-full min-h-screen font-montserrat text-slate-950 bg-gradient-to-b from-sky-200 to-indigo-200">
      {/* <Header /> */}
      <Search />
      <Locations />
    </div>
  );
}

export default App;
