import { Navbar } from "../Components/Navbar/Navbar";
import { Intro } from "../Components/Intro/Intro";
import '../App.css'
import { Services } from "../Components/Services/Services";
import { Experience } from "../Components/Experience/Experience";
import { Work } from "../Components/Works/Works";
import { Portfolio } from "../Components/Portfolio/Portfolio";
import { Testimonials } from "../Components/Testimonials/Testimonial";
import { Contact } from "../Components/Contact/Contact";


const Page6 = () => {
    return (
       <div className="App">
            <Navbar />
            <Contact />
       </div>

    );
};

export default Page6;