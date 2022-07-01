import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import './App.css'
import { Services } from "./Components/Services/Services";
import { Experience } from "./Components/Experience/Experience";
import { Work } from "./Components/Works/Works";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Work />
    </div>
  );
};
