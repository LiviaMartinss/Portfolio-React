import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import { Card } from '../Card/Card';
import Resume from './Resume.pdf'

export const Services = () => {
    return(
        <div className="services">

            {/* left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus, iure nostrum libero sit quia veritatis veniam! 
                    <br />
                    Ab, recusandae quia. Deleniti alias laudantium iste provident minima perspiciatis exercitationem fuga asperiores.
                </span>

                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
           
            </div>
            {/* right side */}
            <div className="cards">
                
                {/* FIRST CARD */}
                <div style={{ left: '14rem' }}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe Illustrator"}
                    />
                </div>

                {/* SECOND CARD */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Html, Css, Javascript, React"}
                    />
                </div>

                {/* 3RD CARD */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {" Lorem ipsum dolor sit amet consectetur adipisicing elit. "}
                    />
                </div>
                <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
           

            </div>
        </div>
    )
}