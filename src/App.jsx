import { useEffect, useState } from "react";
import "./App.css";
import "./styles/header.css";
import "./styles/loader.css";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    const url = `https://rickandmortyapi.com/api/location?name=${newLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data.results[0]))
      .catch((err) => console.log(err));
  };

  const fecthDimension = (url) => {
    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const radomDimension = getRandomDimension(126);
    const url = `https://rickandmortyapi.com/api/location/${radomDimension}`;
    fecthDimension(url);
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <header className="bg-[url('/images/background-header.png')] w-full min-h-[280px] flex justify-center items-center overflow-hidden">
        <div className="  bg-cover  bg-center h-[300px] flex justify-center items-center relative">
          <img
            className="w-[230px] animate-rotate absolute"
            src="/images/sol-completo.png"
            alt=""
          />
          <img
            className="w-[400px] h-[300px] relative "
            src="/images/sombra.png"
            alt=""
          />

          <img
            className="w-[300px] absolute bottom-[20%]"
            src="/images/logo.png"
            alt=""
          />
        </div>
      </header>
      <main className=" bg-[url('/images/bg-main.png')]  min-h-screen  min-w-screen font-Fira-Code  bg-cover  bg-full  ">
        <section className=" text-white grid justify-center  gap-6">
          <LocationForm handleSubmit={handleSubmit} />
          <LocationInfo currentLocation={currentLocation} />
          <ResidentList
            residents={currentLocation?.residents ?? []}
            currentLocation={currentLocation}
          />
        </section>
      </main>
    </>
  );
}

export default App;
