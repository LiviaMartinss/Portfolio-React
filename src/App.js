import { Navbar } from "./Components/Navbar/Navbar";
import { Intro } from "./Components/Intro/Intro";
import './App.css'
import { Services } from "./Components/Services/Services";

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
};
