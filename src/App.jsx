import "./App.css";
import { Header, Locations, Search } from "./components";

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      <Search />
      <Locations />
    </div>
  );
}

export default App;
